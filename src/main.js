import vueTips from './vue-tips.vue'

let Tips = {}

// 只有定义了 install 方法，才能使用 Vue.use() 进行引用
Tips.install = function(Vue, options) {

  let _options = {
    delay: 3000
  }

  // 参数覆盖
  for (let key in options) {
    _options[key] = options[key]
  }

  // 添加实例方法
  Vue.prototype.$tips = function(msg, opt){
    // 参数覆盖
    let cb = ''

    if (typeof opt === 'object') {
      for (let key in opt) {
        _options[key] = opt[key]
      }
    } else if (typeof opt === 'function') {
      cb = opt
    }

    const TipsController = Vue.extend(vueTips)
    let instance = new TipsController().$mount(document.createElement('div'))

    instance.msg = msg
    instance.showFlag = true

    document.body.appendChild(instance.$el)

    setTimeout(() => {
      instance.showFlag = false
      setTimeout(() => {
        document.body.removeChild(instance.$el)
        cb && cb()
      }, 500)
    }, _options.delay)
  }

  // 添加实例方法 - 扩展方法
  Vue.prototype.$tips.show = function(msg, opt){
    return Vue.prototype.$tips(msg, opt)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Tips)
}

export default Tips
