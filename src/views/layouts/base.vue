<template>
  <div>
    <tophat></tophat>
    <headerApp></headerApp>
    <navigation></navigation>

  </div>
</template>

<script>

import tophat from '../../components/tophat';
import headerApp from '../../components/header-app';
import globalNav from '../../components/global-nav';

export default {

  components: {
    tophat: tophat,
    headerApp: headerApp,
    navigation: globalNav
  }

}

</script>