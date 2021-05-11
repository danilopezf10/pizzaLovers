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
            alert(JSON.stringify(this.votes))
            this.$router.push('/vote')
        },
        increment () {
            this.votes++;
        }
    }

}
</script>