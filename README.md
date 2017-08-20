# vue-tips

一个专注于 Vue 的提示插件，高度可定制。

[Demo](https://bxm0927.github.io/vue-tips)

# Installation

```bash
$ npm install vue-tips
```

# Usage

```js
import vueTips from 'vue-tips'
Vue.use(vueTips)
```

```js
this.$tips.show("默认3秒关闭")

this.$tips.show("自定义5秒关闭", {
  delay: 5000
})

this.$tips.show("回调函数", () => {
  alert('这里是回调函数')
})
```

# License

[The MIT License](http://opensource.org/licenses/MIT)
