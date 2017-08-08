import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/common/stylus/index.styl'
import fastclick from 'fastclick'
import vueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
Vue.use(vueLazyLoad, {
  loading: require('@/common/image/default.png')
})

fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
