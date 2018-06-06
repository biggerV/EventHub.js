// 使用原生JS实现事件消息通知类
// lodash is required

// class eventHub
(function(){
  function eventHub() {
    this.regEvents = []
    this.listenEvents = []
    this._trigerOnEvent = function (event){
      const that = this
      _.map(that.listenEvents, function(listenEventItem) {
        if(listenEventItem.event === event){
          _.map(that.regEvents, function(regEventItem) {
            if(regEventItem.event === event){
              listenEventItem.cb(regEventItem.msg)
            }
          })
        }
      })
    }
   this._hasEvent = function(events, event){
    let flag = false
    _.map(events, function(item){
      if(item.event === event){
        flag = true
      }
    })
    return flag
   }
  }
  
  eventHub.prototype.$emit = function (event, msg) {
    if ( !this._hasEvent(this.regEvents, event) ){
      this.regEvents.push({ event, msg})
    }
    this._trigerOnEvent(event)
  }
  
  eventHub.prototype.$on = function (event, cb) {
    if ( !this._hasEvent(this.listenEvents, event) ){
      this.listenEvents.push({ event, cb})
    } 
  }
  //export
  if(typeof exports === 'object'){
    modules.exports = eventHub
  }
  if(typeof window === 'object'){
    window.eventHub = eventHub
  }
})()
