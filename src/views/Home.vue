
<template>
  <div>
    <whiteout></whiteout>
    <baseHeader></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
        <h1>Who Dat?</h1>
        <div>
          <form @submit.prevent="handleSubmit">

            <field
              ID="name"
              CLASS_EXTRA=""
              LABEL="Full Name"
              INPUT_VALUE=""
              INPUT_TYPE="text"
              REQUIRED="true"
              ARIA_REQUIRED="true"
              BEHAVIOR=""
              ARIA_DESCRIBEDBY="name__help"
              ERROR_FIELD="fsa-field--error"
            >
              
              <template v-slot:labelDescribe>
                <span class="fsa-field__label-desc">Required</span>
              </template>
              <!-- Below 2 Slots should be used with above ARIA_DESCRIBEDBY -->
              <template v-slot:help>
                <span id="name__help" class="fsa-field__help">Help text goes here</span>
              </template>
              <!--
              <template v-slot:message>
                <span id="name-id__error-message" class="fsa-field__message" role="alert">Hey, you forgot your own name, silly!</span>
              </template>
              -->

            </field>

            <field
              ID="email"
              CLASS_EXTRA=""
              LABEL="E-Mail"
              INPUT_VALUE=""
              INPUT_TYPE="text"
              REQUIRED="true"
              ARIA_REQUIRED="true"
              BEHAVIOR=""
              ARIA_DESCRIBEDBY="email__help"
              ERROR_FIELD="fsa-field--error"
            >
              
              <template v-slot:labelDescribe>
                <span class="fsa-field__label-desc">Required</span>
              </template>
              <!-- Below 2 Slots should be used with above ARIA_DESCRIBEDBY -->
              <template v-slot:help>
                <span id="email__help" class="fsa-field__help">Help text goes here</span>
              </template>
              <!--
              <template v-slot:message>
                <span id="email__error-message" class="fsa-field__message" role="alert">Hey, you forgot your email address!</span>
              </template>
              -->

            </field>

            <button class="fsa-btn fsa-btn--secondary" type="submit">Set User</button> 

          </form>
          
        </div>
        <button class="fsa-btn fsa-btn--secondary" v-on:click="killExt">Kill Extention</button>
        <ul v-for="user in users">
          <li>
            <p>{{ user.name }} - {{ user.email }}</p>
          </li>
        </ul>
        <hr>
        <h4>chubby</h4>
        <ul v-for="fatuser in fatUsers">
          <li>
            <p>{{ fatuser.name }} - {{ fatuser.email }}</p>
          </li>
        </ul>
        
        </div>
      </div>
    </main>
    
    <baseFooter></baseFooter>
  </div>
</template>

<script>
// PARTIALS
import baseHeader from '../partials/baseHeader';
import baseFooter from '../partials/baseFooter';

// COMPONENTS
import field from '../components/field/field';
import whiteout from '../components/whiteout/whiteout';

import { mapState, mapGetters, mapActions } from 'vuex';

export default {

  components: {
    baseHeader: baseHeader,
    baseFooter: baseFooter,
    field: field,
    whiteout: whiteout,
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
      e.target.name.value = "";
      e.target.email.value = "";
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