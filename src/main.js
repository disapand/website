import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
import reset from 'reset.css'
import scrollreveal from 'scrollreveal'

Vue.use(iView)
Vue.use(reset)

Vue.config.productionTip = false
Vue.prototype.$scroll = scrollreveal

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})

router.afterEach((route) => {
  iView.LoadingBar.finish()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
