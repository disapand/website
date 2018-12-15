import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
import reset from 'reset.css'
import VueAMap from 'vue-amap'

Vue.use(iView)
Vue.use(reset)
Vue.use(VueAMap)

VueAMap.initAMapApiLoader({
  key: 'f6ce604b03a09ce50afed0a07308b00d',
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType']
})

Vue.config.productionTip = false

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
