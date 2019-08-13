<template>
  <header>
    <tophat></tophat>
    <headerApp
      APP_ABBR_NAME="UXPK"
      APP_FULL_NAME="User Experience Prototype Kit"
      PROFILE_NAME="Michael Scott (Log off)">
    </headerApp>
    <navigation></navigation>

  </header>
</template>

<script>

import tophat from '../components/tophat/tophat';
import headerApp from '../components/header-app/header-app';
import globalNav from '../components/global-nav/global-nav';

export default {

  components: {
    tophat: tophat,
    headerApp: headerApp,
    navigation: globalNav
  }

}

</script>