<template>
  <div id="loginform">
    <h2 id="header">Log in</h2>
    <b-card>
      <b-form @submit="onSubmit" v-if="show">
        <b-form-group id="input-group-1" label="Username:" label-for="input-1">
          <b-form-input
            id="logininput-1"
            v-model="form.username"
            type="text"
            placeholder="Enter username"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Password:" label-for="input-2">
          <b-form-input
            id="logininput-2"
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
    name: 'LoginForm',
    data() {
      return {
        form: {
          username: '',
          password: '',
        },
        show: true
        }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()

        axios.post("http://localhost:4000/users/authenticate", this.form)
          .then( (response) => {
            console.log(response)
            this.$store.commit('setUserId', response.data.id)
            this.$store.commit('setToken', response.data.token)
            this.$router.push('/vote')
          })
          .catch( (error) => {  //TODO: should differentiate different types of errors
            console.log(error)
            alert("Username or password is incorrect")
          });
      }   
    }
  }
</script>

<style>
#header {
  text-align: center;
}
#loginform{
    max-width: 500px;
}
</style>