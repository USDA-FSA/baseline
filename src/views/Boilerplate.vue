
<template>
  <div>
    <tophat></tophat>
    <headerApp></headerApp>
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
import tophat from '../components/tophat';
import headerApp from '../components/header-app';
import globalNav from '../components/global-nav';


import { mapState } from 'vuex';

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
  }
}
</script>