<template>
  <header>
    <tophat
      AG_ABBR="USDA"
      AG_FULL="United States Department of Agriculture"
      AG_URL="//www.usda.gov"
      AG_LOGO="img/usda-logo--white.svg"
      SUB_AG_ABBR="FPAC"
      SUB_AG_FULL="Farm Production and Conservation"
      SUB_AG_URL="//fsa.usda.gov"
     >
     </tophat>
    <headerApp
      APP_ABBR_NAME="UXPK"
      APP_FULL_NAME="User Experience Prototype Kit"
      PROFILE_NAME="Michael Scott (Log off)"
      LOGOFF_URL="https://www.eauth.usda.gov/Logout/logoff.asp"
    >
    </headerApp>
    <globalNav :NAV_DATA="navigationData"></globalNav>

  </header>
</template>

<script>

import tophat from '../components/tophat/tophat';
import headerApp from '../components/header-app/header-app';
import globalNav from '../components/global-nav/global-nav';

import { mapState, mapGetters, mapActions } from 'vuex';

export default {

  components: {
    tophat: tophat,
    headerApp: headerApp,
    globalNav: globalNav
  },

  computed: {
    ...mapState({
      navigationData: state => state.navigation.all
    })
  },
  

  methods: {

  },

  created(){
    this.$store.dispatch('navigation/getNavApi');
  }

}

</script>