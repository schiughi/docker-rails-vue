<template>
<div class="container">
  <el-form label-position="left" label-width="100px" :model="user">
    <el-form-item label="e-mail">
      <el-input v-model="user.email"></el-input>
    </el-form-item>
    <el-form-item label="password">
      <el-input type="password" v-model="user.password" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="signIn">sign in</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
  export default {
    data: function(){
      return {
        user: {
          email: null,
          password: null
        }
      }
    },
    methods: {
      signIn: function(){
        this.$http.post('/api/auth/sign_in', this.user)
        .then((response) => {
          console.log(response)
          this.$store.dispatch('authenticate',
            {
            auth: {
              uid: response.headers['uid'],
              client: response.headers['client'],
              accessToken: response.headers['access-token'],
              isAuthenticated: true
            }
          })
        })
        .catch((error) => {
          console.error(error)
        })
      }
    }
  }
</script>
