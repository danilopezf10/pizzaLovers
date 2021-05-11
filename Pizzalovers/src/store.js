import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    userId: 0,
    token: "",
    chartKey: 0 //used to re render UserChart components by changing their keys
  },

  mutations: {
    setUserId (state, n) {
        state.userId = n
    },
    setToken (state, t) {
        state.token = t
    },
    incrementKey(state){
      state.chartKey++
    }
  },
  
  getters:{
    getUserId: state => {
        return state.userId
    },
    getToken: state => {
        return state.token
    },
    getChartKey: state => {
      return state.chartKey
  }
  }
})