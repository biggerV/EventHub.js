# something
一些自己写的工具类

### eventHub.js 事件消息中心
```
// try it now
var eventBus = new eventHub

// emit
function sayHi(){
  eventBus.$emit('say', 'hi')
}

function shout(){
  eventBus.$emit('shout', 'oh my god')
}

function showMyName(){
  eventBus.$emit('showMyName', {name: 'victor'})
}
// listen
eventBus.$on('shout', msg => alert(msg))
eventBus.$on('say', msg => alert(msg))
eventBus.$on('showMyName', msg => alert(msg.name))
```
```
<button onClick='sayHi()'>sayHi</button>
<button onClick='shout()'>shout</button>
<button onClick='showMyName()'>showMyName</button>
```
