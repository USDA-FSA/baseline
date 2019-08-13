
<template>
  <router-view></router-view>
</template>

<script>

import { mapActions } from 'vuex';
//import Home from './Home';
//import Boilerplate from './Boilerplate';

export default {
  name: "app",
  /*
  components: {
    Home,
    Boilerplate
  },
  */
  watch: {
    $route (to, from){
        
    } 
  } 
};

</script>