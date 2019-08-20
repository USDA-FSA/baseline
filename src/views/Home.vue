
<template>
  <div>
    <whiteout></whiteout>
    <baseHeader></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
        <h1>Who Dat?</h1>
        <div>
          <card NAME="This is cool" :CARDDATA="cardData"></card>
        </div>
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
              ERROR_FIELD=""
              HAS_HELP="true"
            >
              
              <template v-slot:labelDescribe>
                <span class="fsa-field__label-desc">Required</span>
              </template>
              <!-- Below 2 Slots should be used with above ARIA_DESCRIBEDBY -->
              <template v-slot:help>
                <span id="name__help" class="fsa-field__help">Use your full name, please.</span>
              </template>
              <template v-slot:message>
                <span id="name-id__error-message" class="fsa-field__message" role="alert">Hey, you forgot your own name, silly!</span>
              </template>

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
              ERROR_FIELD=""
            >
              
              <template v-slot:labelDescribe>
                <span class="fsa-field__label-desc">Required</span>
              </template>
              <!-- Below 2 Slots should be used with above ARIA_DESCRIBEDBY -->
              <template v-slot:help>
                <span id="email__help" class="fsa-field__help">Only valid emails should be used.</span>
              </template>
              <template v-slot:message>
                <span id="email__error-message" class="fsa-field__message" role="alert">Hey, you forgot your email address!</span>
              </template>

            </field>

            <button class="fsa-btn fsa-btn--secondary" type="submit">Set User</button> 

          </form>
          
        </div>
        <div>
            <button class="fsa-btn fsa-btn--secondary" v-on:click="killExt">Kill Extention</button>

            <table class="fsa-table fsa-table--borderless fsa-table--responsive fsa-table--responsive-horizontal fic-inspections fic-inspections--status-filter-is-all" id="inspectionsTable">
              <caption class="sr-only">Inspections</caption>
              <thead class="fic-inspections__thead">
                <tr class="fic-inspections__row--thead">
                  <th class="fsa-table__th--sticky"><button type="button" class="fsa-table__sort">Full Name</button></th>
                  <th class="fsa-table__th--sticky"><button type="button" class="fsa-table__sort">Email Address</button></th>
                  <th class="fsa-table__th--sticky"><button type="button" class="fsa-table__sort">Actions</button></th>
                </tr>
              </thead>
              <tbody class="fic-inspections__tbody" id="pt__progress-alt-1">
                <tr v-for="user in users" class="fic-inspections__row" data-status="is-complete" data-assignee="assignedto-norm-peterson">
                  <td aria-label="Name">{{ user.name }}</td>
                  <td aria-label="Email">{{ user.email }}</td>
                  <td aria-label="Actions Button"><button class="fsa-btn fsa-btn--secondary">Delete</button></td>
                </tr>
              </tbody>
            </table>
            
          </div>  
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
import card from '../components/card/card';
import whiteout from '../components/whiteout/whiteout';

import { mapState, mapGetters, mapActions } from 'vuex';

export default {

  components: {
    baseHeader: baseHeader,
    baseFooter: baseFooter,
    card: card,
    field: field,
    whiteout: whiteout,
  },

  data(){
    return {
      cardData: [
        {
          label: "Employer",
          desc: "USDA"
        },
        { 
          label: "Position",
          desc: "Accountant"
        }
      ]
    }
  },


  computed: {
    ...mapState({
      navigationData: state => state.navigation.all,
      users: state => state.users.all,
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
    //this.$store.dispatch('navigation/getNavApi');
    this.$store.dispatch('users/getUsersApi');
    //this.getUsers();
  }
}
</script>