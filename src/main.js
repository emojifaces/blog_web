import Vue from 'vue'
import App from './App.vue'
import less from 'less'
import router from './router/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

Vue.use(less)
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
