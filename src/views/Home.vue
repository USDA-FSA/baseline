
<template>
  <div>
    <navigation></navigation>
    <h1>Who Dat?</h1>
    <ul v-for="user in users">
      <li>
        <p>{{ user.name }}</p>
        <p>{{ user.email }}</p>
      </li>
    </ul>
    <hr>
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
import Nav from '../components/Nav';

export default {

  components: {
    navigation: Nav
  },

  computed: {

    users(){
      return this.$store.state.users;
    },

    fatUsers(){
      return this.$store.getters.fatUsers;
    }
  },

  methods: {

    killExt: function(){
      this.$store.dispatch('killExtention');
      //.commit('killExtention');
    },

    handleSubmit: function(e){
      let user = {name: e.target.name.value, email: e.target.email.value};
      this.$store.dispatch('addNewUser', user );
    }
  }
}
</script>