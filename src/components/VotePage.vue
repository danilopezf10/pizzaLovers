<template>
  <div id="votepage">
    <div class="mt-5">
      <PizzaVoter/>
      <UsersChart class="my-5"/>
    </div>
  </div>
</template>

<script>
import PizzaVoter from './PizzaVoter.vue'
import UsersChart from './UsersChart.vue'

export default {
  name: 'VotePage',
  components: {
    PizzaVoter,
    UsersChart
  }
}
</script>