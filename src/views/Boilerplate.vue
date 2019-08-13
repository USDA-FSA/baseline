
<template>
  <div>
    <baseHeader></baseHeader>
    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <h1>Boil the Ocean</h1>
          <ul v-for="user in users">
            <li>
              <p>{{ user.name }}</p>
              <p>{{ user.email }}</p>
            </li>
          </ul>
        </div>
      </div>
    </main>
    <baseFooter></baseFooter>
  </div>
</template>

<script>
import baseHeader from './partials/baseHeader';
import baseFooter from './partials/baseFooter';

import { mapState } from 'vuex';

export default {

  components: {
    baseHeader: baseHeader,
    baseFooter: baseFooter
  },

  computed: {
    ...mapState({
      users: state => state.users.all
    })
  }
}
</script>