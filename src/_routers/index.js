

import Vue from 'vue';
import Router from 'vue-router';

import Home from '../views/Home';
import Boilerplate from '../views/Boilerplate';
import CropReport from '../views/Reports/CropReport';


Vue.use( Router );

export default new Router({
  mode: 'history',
  routes: [
    { 
      path: '/',
      name: 'home',
      component: Home
    },

    { path: '/boilerplate',
      name: 'boilerplate',
      component: Boilerplate
    },

    { path: '/reports/crop-report',
      name: 'crop-report',
      component: CropReport
    },

    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
});
