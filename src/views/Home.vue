
<template>
  <div>
    <whiteout></whiteout>
    <baseHeader></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
        <h1>Who Dat?</h1>
        <ul v-for="user in users">
          <li>
            <p>{{ user.name }} - {{ user.email }}</p>
          </li>
        </ul>
        <hr>
        <h4>chubby</h4>
        <ul v-for="fatuser in fatUsers">
          <li>
            <p>{{ fatuser.name }} - {{ fatuser.email }}</p>
          </li>
        </ul>
        <button class="fsa-btn fsa-btn--secondary" v-on:click="killExt">Kill Extention</button>
        <div>
          <form @submit.prevent="handleSubmit">

            <label for="name">Name</label>
            <input name="name">

            <label for="email">Email</label>
            <input name="email">

            <button class="fsa-btn fsa-btn--secondary" type="submit">Set User</button>

          </form>
          </div>
        </div>
      </div>
    </main>
    
    <baseFooter></baseFooter>
  </div>
</template>

<script>
// PARTIALS
import baseHeader from '../partials/baseHeader';
import baseFooter from '../partials/baseFooter';

// COMPONENTS
import whiteout from '../components/whiteout/whiteout';

import { mapState, mapGetters, mapActions } from 'vuex';

export default {

  components: {
    baseHeader: baseHeader,
    baseFooter: baseFooter,
    whiteout: whiteout,
  },

  computed: {
    ...mapState({
      users: state => state.users.all
    }),
    ...mapGetters('users', {
      fatUsers: 'fatUsers'
    })
  },
  

  methods: {

    ...mapActions('users',{
      killExt: 'killExtention',
      submitForm: 'addNewUser'
    }),
    handleSubmit(e){
      let user = {name: e.target.name.value, email: e.target.email.value};
      this.submitForm( user );
    }

    /*
    killExt: function(){
      this.$store.dispatch('users/killExtention');
      //.commit('killExtention');
    },

    handleSubmit: function(e){
      let user = {name: e.target.name.value, email: e.target.email.value};
      this.$store.dispatch('users/addNewUser', user );
    }
    */
  },

  created(){
    this.$store.dispatch('users/getUsersApi');
    //this.getUsers();
  }
}
</script>