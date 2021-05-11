<template>
  <div id="app">
    <div>
      <NavBar />
    </div>
   <router-view></router-view>
  </div>
</template>


<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>


<style>
.text-gray{
    color:gray
}
</style>
