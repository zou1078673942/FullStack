import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入全局框架或组件
// import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// Vue.use(ElementUI) // 全局

Vue.config.productionTip = false
// Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
