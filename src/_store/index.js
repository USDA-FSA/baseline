

import Vue from 'vue';
import Vuex from 'vuex';
//import { stat } from 'fs';


Vue.use( Vuex );

export const store = new Vuex.Store({
  
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
        
        fatUsers: state => {
          var fatUsers = state.users.map( user => {
            return {
              name: 'Fat ' + user.name,
              email: user.email
            }
          });
          return fatUsers;
        },

      },
      
      actions: {

        killExtention({ commit }){
          commit('KILL_EXTENTION');
        },

        addNewUser({ commit }, user){
          commit('ADD_NEW_USER', user);
        }
        
      },
      
      mutations: {

        KILL_EXTENTION( state ){
          let kx = state.users.forEach( user => {
            user.email = user.email.split('.com')[0];
          });
          return kx;
        },

        ADD_NEW_USER( state, user ){
          state.users.push( user );
        },

        /*
        killExtention: state => {
          let kx = state.users.forEach( user => {
            user.email = user.email.split('.com')[0];
          });
          return kx;
        },
        */


        
    


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