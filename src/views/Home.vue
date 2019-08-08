
<template>
  <div>
    <h1>Who Dat?</h1>
    <ul>
      <li :for="user in users">
        <p>{{ user.name }}</p>
        <p>{{ user.email }}</p>
      </li>
    </ul>
    <div>
      <form @submit.prevent="handleSubmit">

        <label for="name">Name</label>
        <input v-model="name" name="name">

        <label for="email">Email</label>
        <input v-model="email" name="email">

        <button type="submit">Set User</button>

      </form>
    </div>
  </div>
</template>

<script>

//import { mapState, mapGetter, mapActions } from 'vuex';

export default {

  computed: {
    //...mapState(['user'])
    users(){
      return this.$store.state.users;
    }
  },

  methods: {
    /*
    //...mapActions('user', []),
    handleSubmit(e){
      
      const {name, email} = this;
      if( name && email){

        this.setUserName(name);
        this.setUserEmail(email);
      }
    }
    */
  }
}
</script>