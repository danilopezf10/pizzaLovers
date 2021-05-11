<template>
    <div id="pizzavoter">
        <b-form @submit="onSubmit" v-if="show" style="text-align:center">
            <h2 >How much do you <b-button v-on:click.prevent="increment">&lt;3</b-button> pizza?: </h2>
            <h3  class="text-gray">{{ votes }}!</h3>
            <b-button  type="submit" variant="primary" class="mt-2">Save</b-button>
        </b-form>
    </div>
</template>


<script>
import axios from 'axios';

export default {
    name: 'PizzaVoter',
    data() {
        return {
            votes:0,
            show: true
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()

            const config = {
                headers: { Authorization: "Bearer " + this.$store.getters.getToken }
            };
            const body = {
                    "votes" : this.votes
            }

            // update user with new number of votes
            axios.put("http://localhost:4000/users/" + this.$store.getters.getUserId, body, config)
                .then( (response ) => {
                    console.log(response)
                    this.$store.commit("incrementKey") //re renders UsersChart by changing its key
                })
                .catch(( error ) => {
                    console.log(error)
                    alert(error)
                });
        },
        increment () {
            this.votes++;
        }
    },
    mounted(){
        const config = {
            headers: { Authorization: "Bearer " + this.$store.getters.getToken }
        };

        axios.get("http://localhost:4000/users/" + this.$store.getters.getUserId, config)
            .then( (response) => {
                console.log(response)
                this.votes =  response.data.votes
            })
            .catch(( error ) => {
                console.log(error)
                alert(error)
            });
    }

}
</script>