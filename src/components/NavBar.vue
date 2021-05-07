<template>
    <div id="navbar">
        <b-navbar toggleable="lg" type="dark" variant="info">
            <router-link tag="b-navbar-brand" to="/" class="ms-5" id="brand">PIZZA &lt;3</router-link>
            <router-link to="/login" tag="b-button" class="ms-auto me-5">Log in/Sign up</router-link>
        </b-navbar>
    </div>
</template>

<script>
export default {
     name: 'NavBar'
}
</script>


<style>
#brand {
    cursor: pointer;
}
</style>