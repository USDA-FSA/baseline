
<template>
  <div>
    <tophat></tophat>
    <headerApp></headerApp>
    <navigation></navigation>
    <h1>Crop Report</h1>
    <h4>normal</h4>
    <ul v-for="user in users">
      <li>
        <p>{{ user.name }}</p>
        <p>{{ user.email }}</p>
      </li>
    </ul>
       
    </div>
  </div>
</template>

<script>
import tophat from '../../components/tophat';
import headerApp from '../../components/header-app';
import globalNav from '../../components/global-nav';


import { mapState, mapGetters, mapActions } from 'vuex';

export default {

  components: {
    tophat: tophat,
    headerApp: headerApp,
    navigation: globalNav
  },

  computed: {
    ...mapState({
      users: state => state.users.all
    })
  },
  
  methods: {

  },

  created(){
    this.$store.dispatch('users/getUsersApi');
    //this.getUsers();
  }
}
</script>