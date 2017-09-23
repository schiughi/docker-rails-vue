<template>
<div class="container">
  <el-form label-position="left" label-width="100px" :model="user">
    <el-form-item label="Name">
      <el-input v-model="user.name"></el-input>
    </el-form-item>
    <el-form-item label="e-mail">
      <el-input v-model="user.email"></el-input>
    </el-form-item>
    <el-form-item label="password">
      <el-input type="password" v-model="user.password" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="password confirmation">
      <el-input type="password" v-model="user.password_confirmation" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="signUp">register</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
  export default {
    data: function(){
      return {
        user: {
          name: null,
          email: null,
          password: null,
          password_confirmation: null
        }
      }
    },
    methods: {
      signUp: function(){
        this.$http.post('/api/auth', this.user)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
      }
    }
  }
</script>
