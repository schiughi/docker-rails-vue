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

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
     el: '#el-index',
     data: {
       columns: ["name" , "age" , "joined on"],
       staffs: [],
       query: {
         age_gt: 20,
         name_cont: "Mr"
       }
     },
     created: function(){
        this.search()
     },
     methods:{
       search: function(){
         axios.get('/api/staffs/search',{
          headers: { 
            'X-CSRF-Token': document.querySelector("meta[name=csrf-token]").content
         },
          params:{
           q: JSON.stringify(this.query)
          }
         })
         .then((response) => {
          console.log(response);
          this.staffs = response.data.staffs;
        })
        .catch((error) => {
          console.log(error);
        })
       }
     }
   })
})