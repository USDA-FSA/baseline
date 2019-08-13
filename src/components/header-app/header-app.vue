<template>
  <div class="fsa-header-app">
    <div class="fsa-header-app__bd">
      <div class="fsa-header-app__primary">
        <router-link to="home" class="fsa-header-app__home-link">
          <span class="fsa-header-app__app-name">
            <abbr class="fsa-header-app__app-abbr" title="FSA Prototype Kit">{{ APP_ABBR_NAME }}</abbr>
            <span class="fsa-header-app__app-full">{{ APP_FULL_NAME }}</span>
          </span>
        </router-link>
      </div>
      <div class="fsa-header-app__secondary">
        <span class="fsa-header-app__profile">
          <router-link to="https://www.eauth.usda.gov/Logout/logoff.asp" class="fsa-header-app__profile-link">
            <span class="fsa-header-app__profile-name">{{ PROFILE_NAME }}</span>
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    APP_ABBR_NAME: String,
    APP_FULL_NAME: String,
    PROFILE_NAME: String,
    
  },
}
</script>