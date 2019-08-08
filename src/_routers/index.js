

import Vue from 'vue';
import Router from 'vue-router';

import Home from '../views/Home';
import Boilerplate from '../views/Boilerplate';

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

    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
});
/*
router.beforeEach((to, from, next) => {
  

  next();
})
*/