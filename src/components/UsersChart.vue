<template>
  <div id="userschart">
        <div id="header">
            <h2 >Top 10 pizza lovers</h2>
        </div>
        <div id="chart" class="mx-auto">
            <reactive-bar-chart :chart-data="chartData"></reactive-bar-chart>
        </div>
  </div>
</template>

<script>
import ReactiveBarChart from "../ReactiveBarChart.js";
export default {
  name: "UsersChart",
  components: {
    ReactiveBarChart
  },
  data() {
    return {
      chartData: null
    };
  },
  methods: {
    generateData() {
      let newArray = [];
      for (let i = 0; i < 10; i++) {
        let randomValue = Math.floor(Math.random() * 10);
        newArray.push(randomValue);
      }

      this.chartData = {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange", "Orange", "Orange", "Orange", "Orange"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: newArray
          }
        ]
      };
    }
  },
  mounted() {
    setInterval(this.generateData, 2000);
  }
};
</script>

<style>
#header {
  text-align: center;
}
#chart{
max-width: 500px;
}

</style>

<!--

<script>
  import { Bar } from 'vue-chartjs'

export default {
     name: 'UsersChart',
  extends: Bar,
  data() {
      return {
        data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
        show: true
      }
    },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>

<style>

</style>

-->