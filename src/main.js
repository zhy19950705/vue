import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import App from './App';
import router from './router';
import store from './store';

require('../mock');

Vue.use(Vuex);
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
