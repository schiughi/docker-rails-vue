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

Vue.use(ElementUI, { locale })

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#el-index',
    data: function(){ 
      return {
        staffs: [],
        query: {
          name_cont: null,
          age_gt: 0,
          age_lteq: 100,
          joined_on_gt: null,
          joined_on_lteq: null
        }
      }
    },
    created: function(){
      this.search()
    },
    methods:{
      notificate: function(msg){
        this.$notify({
          type: 'error',
          title: 'Error',
          message: msg
        });
      },
      search: function(){
        axios.get('/api/staffs/search',{
          headers: { 
            'X-CSRF-Token': document.querySelector("meta[name=csrf-token]").content
          },
          params:{
            q: this.query
          },
          paramsSerializer: function(params) {
            return Qs.stringify(params, {arrayFormat: 'brackets'})
          }
        })
        .then((response) => {
          console.log(response);
          this.staffs = response.data.staffs;
        })
        .catch((error) => {
          console.log(error);
          this.notificate(error.message);
        })
      }
    }
  })
})