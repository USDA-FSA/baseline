

import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export default new Vuex.Store({
  
      state: {

        users: [
          {
            name: 'Def',
            email: 'def@def.com'
          },
          {
            name: 'Casey',
            email: 'casey@casey.com'
          }
        ] 

      },

      getters: {
        user: state => {
          return state.user
        }
      },
      
      actions: {
        setUserName(context, name){
          context.commit('SET_USER_NAME', name);
        },
        setUserEmail(context, email){
          context.commit('SET_USER_EMAIL', email);
        }
      },
      
      mutations: {
        SET_USER_NAME(state, name){
          state.user.name = name;
        },
        SET_USER_EMAIL(state, email){
          state.user.email = email;
        }
      }


  /*
  modules: {
    
    users : {
      namespaced: true,

      state: {

        user: {
          name: 'Def',
          email: 'def@def.com'
        }

      },

      getters: {
        user: state => {
          return state.user
        }
      },
      
      actions: {
        setUserName(context, name){
          context.commit('SET_USER_NAME', name);
        },
        setUserEmail(context, email){
          context.commit('SET_USER_EMAIL', email);
        }
      },
      
      mutations: {
        SET_USER_NAME(state, name){
          state.user.name = name;
        },
        SET_USER_EMAIL(state, email){
          state.user.email = email;
        }
      }

    }

  }
  */
})