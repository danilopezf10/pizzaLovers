import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue';
import VueRouter from 'vue-router'

import HomePage from './pages/HomePage.vue'
import LogInPage from './pages/LogInPage.vue'
import VotePage from './pages/VotePage.vue'

import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { store } from './store';

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueRouter);

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LogInPage },
  { path: '/vote', component: VotePage }
]

const router = new VueRouter({
  mode : 'history', //removes # from URL
  routes
})

new Vue({
  render: h => h(App),
  router,
  store: store
}).$mount('#app')
