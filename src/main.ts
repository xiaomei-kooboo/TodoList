import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './registerServiceWorker'
import 'element-ui/lib/theme-chalk/index.css'
import { Button, Select } from 'element-ui'

Vue.use(Button)
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
