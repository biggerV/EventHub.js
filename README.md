# something
一些自己写的工具类

## eventHub

### creating a new eventHub instance
```
var eventBus = new eventHub
```
### $emit
```
eventBus.$emit('say', 'what')

```
### $on
```
eventBus.$on('say', msg => alert(msg))

```
### $remove
```
eventBus.$remove('say')

```
### $destroy
```
eventBus.$destroy(who)
```
[codepen](https://codepen.io/biggerv/pen/vrKmbz)
