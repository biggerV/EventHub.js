## EventHub

有问题请加我微信，入群解决

![扫码加我微信，拉你入前端群](https://github.com/biggerV/webpack4-lesson/blob/master/wechat-qrcode.jpg?raw=true)

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
