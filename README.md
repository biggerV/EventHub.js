# something
一些自己写的工具类

## eventHub

### create a new eventHub instance
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
eventBus.$destroy('say')
```
[codepen](https://codepen.io/biggerv/pen/vrKmbz)
