<template>
  <div id="signupform">
      <h2 id="header">Sign up</h2>
      <b-card>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group id="input-group-1" label="Username:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.username"
          placeholder="Enter username"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          placeholder="Enter password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" class="mt-2">Go</b-button>
    </b-form>
    </b-card>

  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'SignUpForm',
    data() {
      return {
        form: {
          username: '',
          password: '',
          votes: 0
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        //let router = this.$router
        //axios.post('https://localhost:5001/api/Voters', this.form)
        axios.post('http://localhost:4000/users/register',this.form)
                .then(function( response ){
                  console.log(response)
                  alert("You've been registered successfully")
                  //router.push('/vote')
                }).catch(function( error ){
                  console.log(error)
                  alert(error)
                });   
       // alert(JSON.stringify(this.form))
       // this.$router.push('/vote')
      }
    }
  }
</script>

<style>
#header {
  text-align: center;
}
#signupform{
    max-width: 500px;
}
</style>