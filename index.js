// class EventHub

function EventHub() {
  this.regEvents = []
  this.listenEvents = []
  this._trigerOnEvent = function (event) {
    const that = this
    that.listenEvents.map(function (listenEventItem) {
      if (listenEventItem.event === event) {
        that.regEvents.map(function (regEventItem) {
          if (regEventItem.event === event) {
            return listenEventItem.cb(regEventItem.msg)
          }
        })
      }
    })
  }
  this._hasEvent = function (events, event) {
    let flag = false
    events.map(function (item) {
      if (item.event === event) {
        flag = true
      }
    })
    return flag
  }
}

EventHub.prototype.$emit = function (event, msg) {
  if (this._hasEvent(this.listenEvents, event)) {
    if (!this._hasEvent(this.regEvents, event)) {
      this.regEvents.push({ event, msg })
    } else if (this._hasEvent(this.regEvents, event)) {
      this.regEvents.map(item => {
        if (item.event === event) {
          item.msg = msg
        }
      })
    }
  }
  this._trigerOnEvent(event)
}

EventHub.prototype.$on = function (event, cb) {
  if (!this._hasEvent(this.listenEvents, event)) {
    this.listenEvents.push({ event, cb })
  }
}

EventHub.prototype.$remove = function (event) {
  this.regEvents = this.regEvents.filter(function (item) {
    return item.event !== event
  })
}

EventHub.prototype.$destroy = function (event) {
  this.$remove(event)
  this.listenEvents = this.listenEvents.filter(function (item) {
    return item.event !== event
  })
}

//export
if (typeof exports === 'object') {
  module.exports = EventHub
}
if (typeof window === 'object') {
  window.EventHub = EventHub
}
