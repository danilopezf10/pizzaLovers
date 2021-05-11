<template>
  <div id="homepage">
    <div class="mt-5 mx-auto" id="chart">
      <UsersChart/>
    </div>
  </div>
</template>


<script>
import UsersChart from '../components/UsersChart.vue'

export default {
  name: 'HomePage',
  components: {
    UsersChart
  }
}
</script>