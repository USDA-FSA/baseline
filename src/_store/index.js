

import Vue from 'vue';
import Vuex from 'vuex';
import { navigation } from './navigation.module';
import { users } from './users.module';

Vue.use( Vuex );

export const store = new Vuex.Store({
  modules: {
    navigation,
    users
  }
});
