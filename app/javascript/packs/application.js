/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import Vue from 'vue/dist/vue.esm'
import axios from 'axios'
import Qs from 'qs'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-default/index.css'
import '../src/styles/style.scss'
import Staffs from '../src/pages/staffs.vue'
import LogIn from '../src/pages/log_in.vue'
import LogOut from '../src/components/sign_out.vue'
import VueRouter from 'vue-router'
import stored from '../src/store/index.js'
import Vuex from 'vuex'

Vue.use(VueRouter)
Vue.use(ElementUI, { locale })
Vue.use(Vuex)

Vue.prototype.$http = axios.create({
  headers: { 
    'X-CSRF-Token': document.querySelector("meta[name=csrf-token]").content
  },
  paramsSerializer: function(params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  }
})

Vue.prototype.$http.interceptors.request.use(
  function (config) {
    console.log(config)
    return config;
  }, function (error) {
    return Promise.reject(error);
  }
)

const routes = [
  { path: '/staffs', component: Staffs },
  { path: '/log-in', component: LogIn },
  { path: '/log-out', component: LogOut }
]
const router = new VueRouter({
  routes
})
const store = new Vuex.Store(stored)

console.log(store)
const app = new Vue({
  router,
  store
}).$mount('#app')
