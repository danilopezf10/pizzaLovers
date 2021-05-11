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
import axios from 'axios';

export default {
  name: "UsersChart",
  components: {
    ReactiveBarChart
  },
  data() {
    return {
      chartData: null,
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEiLCJuYmYiOjE2MjA2Nzc1NTEsImV4cCI6MTYyMTI4MjM1MSwiaWF0IjoxNjIwNjc3NTUxfQ.2CK6E3YcXc_FEAgMH-oK6PiXM2bfi95kRQ0G4s-LGVs"
    };
  },
  mounted() {
    const config = {
          headers: { Authorization: "Bearer "+this.token }
        };
    //axios.get('https://localhost:5001/api/Voters')
    axios.get("http://localhost:4000/users", config)
                .then(function( response ){
                    let orderedUsers = response.data.sort((a,b) => b.votes - a.votes).slice(0,10)
                    let usernames = []
                    let votes=[]
                    var i;
                    for (i = 0; i < orderedUsers.length; i++) {
                        usernames.push(response.data[i].username)
                        votes.push(response.data[i].votes)
                    }
                    this.chartData = {
        labels: usernames,
        datasets: [
          {
            label: "<3",
            backgroundColor: "#f87979",
            data: votes
          }
        ]
      };
                }.bind(this));
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