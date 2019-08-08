
<template>
  <div>
    <navigation></navigation>
    <h1>Boil the Ocean</h1>
    <ul v-for="user in users">
      <li>
        <p>{{ user.name }}</p>
        <p>{{ user.email }}</p>
      </li>
    </ul>
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
    }
    
  },
}
</script>