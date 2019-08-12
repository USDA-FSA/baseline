
<template>
  <div>
    <baseLayout></baseLayout>
    <h1>Who Dat?</h1>
    <h4>normal</h4>
    <ul v-for="user in users">
      <li>
        <p>{{ user.name }}</p>
        <p>{{ user.email }}</p>
      </li>
    </ul>
    <hr>
    <h4>chubby</h4>
    <ul v-for="fatuser in fatUsers">
      <li>
        <p>{{ fatuser.name }}</p>
        <p>{{ fatuser.email }}</p>
      </li>
    </ul>
    <button v-on:click="killExt">Kill Extention</button>
    <div>
      <form @submit.prevent="handleSubmit">

        <label for="name">Name</label>
        <input name="name">

        <label for="email">Email</label>
        <input name="email">

        <button type="submit">Set User</button>

      </form>
    </div>
  </div>
</template>

<script>
import baseLayout from './layouts/base';

import { mapState, mapGetters, mapActions } from 'vuex';

export default {

  components: {
    baseLayout: baseLayout
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