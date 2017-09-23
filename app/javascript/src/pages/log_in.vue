<template>
  <el-tabs type="border-card">
    <el-tab-pane label="sign in">
      <el-sign-in></el-sign-in>
    </el-tab-pane>
    <el-tab-pane label="sign up">
      <el-sign-up></el-sign-up>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  import SignIn from '../components/sign_in.vue'
  import SignUp from '../components/sign_up.vue'

  export default {
    components: {
      'el-sign-in': SignIn,
      'el-sign-up': SignUp
    }
  }
</script>