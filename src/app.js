

import Vue from 'vue';
import router from './_routers';
import store from './_store';
import App from './views/App';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});