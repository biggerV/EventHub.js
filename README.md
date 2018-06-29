# something
一些自己写的工具类

## EventHub

### create a new EventHub instance
```
var EventBus = new EventHub
```
### $emit
```
EventBus.$emit('say', 'what')

```
### $on
```
EventBus.$on('say', msg => alert(msg))

```
### $remove
```
EventBus.$remove('say')

```
### $destroy
```
EventBus.$destroy('say')
```
[codepen](https://codepen.io/biggerv/pen/vrKmbz)
