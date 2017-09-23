<template>
  <el-button type="primary" @click="signOut">sign out</el-button>
</template>

<script>
  export default {
    methods: {
      signOut: function(){
        this.$http.delete('api/auth/sign_out', {
          headers: {
            'uid': this.$store.state.auth.uid,
            'client': this.$store.state.auth.client,
            'access-token': this.$store.state.auth.accessToken
          }
        })
        .then((response) => {
          console.log(response)
          this.$parent.auth = {}
        })
        .catch((error) => {
          console.log(error)
        })
      }
    }
  }
</script>