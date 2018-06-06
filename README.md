# something
一些自己写的工具类

### eventHub.js 事件消息中心
```
// try it now
var eventBus = new eventHub

// emit
function say(what){
  eventBus.$remove('say')
  eventBus.$emit('say', what)
}

function shout(){
  eventBus.$emit('shout', 'oh my god')
}

function showMyName(){
  eventBus.$emit('showMyName', {name: 'victor'})
  console.log(eventBus)
}

function destroy(who){
  eventBus.$destroy(who)
  console.log(eventBus)
}
// listen
eventBus.$on('shout', msg => alert(msg))
eventBus.$on('say', msg => alert(msg))
eventBus.$on('showMyName', msg => alert(msg.name))

```
[codepen](https://codepen.io/biggerv/pen/vrKmbz)
