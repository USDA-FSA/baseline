
import { service } from '../_services/users.service';

const state = {
  all: []
};

const getters = {
   
  fatUsers: state => {
    let fatUsers = state.all.map( user => {
      return {
        name: 'Fat ' + user.name,
        email: user.email
      }
    });
    return fatUsers;
  }

};

const actions = {

  getUsersApi({ commit }){
    service.getAllUsers( users => {
      commit('SET_ALL_USERS', users);
    });
  },

  killExtention({ commit }){
    commit('KILL_EXTENTION');
  },

  addNewUser({ commit }, user){
    commit('ADD_NEW_USER', user);
  }
  
};

const mutations = {

  SET_ALL_USERS( state, users ){
    state.all = users;
  },

  KILL_EXTENTION( state ){
    let kx = state.all.forEach( user => {
      user.email = user.email.split('.com')[0];
    });
    return kx;
  },

  ADD_NEW_USER( state, user ){
    state.all.push( user );
  },

};

export const users = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};