import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import routes from './routes.js'
import App from './App.vue'

//Авторизация
import Axios from 'axios'
Axios.defaults.baseURL = 'http://192.168.1.76:8090';
Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')

// if (token) {
// //   Vue.prototype.$http.defaults.headers.common['Authorization'] = token
// // }


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router :routes, token


}).$mount('#app')
