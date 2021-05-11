<template>
  <div id="loginpage">
      <LoginForm class="mx-auto mt-5"/>
      <h3 style="text-align:center" class="mt-5 text-gray">Or</h3>
      <SignUpForm class="mx-auto my-5"/>
  </div>
</template>


<script>
import LoginForm from './LoginForm.vue'
import SignUpForm from './SignUpForm.vue'

export default {
  name: 'LogInPage',
  components: {
    LoginForm,
    SignUpForm
  }
}
</script>

<style>

</style>