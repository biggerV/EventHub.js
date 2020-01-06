# EventHub

### install
```
npm install v-eventhub -S
```

### import Eventhub
```
import Eventhub from 'v-eventhub'   
or   
const Eventhub = require('v-eventhub')   
```

### create a new EventHub instance
```
var eventHub = new EventHub
```

## Apis

### $emit
```
eventHub.$emit('say', 'what')

```
### $on
```
eventHub.$on('say', msg => alert(msg))

```
### $remove
```
eventHub.$remove('say')

```
### $destroy
```
eventHub.$destroy('say')
```

有问题请加我微信，入群解决

![扫码加我微信，拉你入前端群](https://github.com/biggerV/webpack4-lesson/blob/master/wechat-qrcode.jpg?raw=true)
