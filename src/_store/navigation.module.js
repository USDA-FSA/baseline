
import { navigationService } from '../_services/navigation.service';

const state = {
  all: []
};


const actions = {

  getNavApi({ commit }){
    navigationService.getNavigation( navigation => {
      commit('SET_NAV', navigation );
    });
  },
  
};

const mutations = {

  SET_NAV( state, navigation ){
    state.all = navigation;
  },

};

export const navigation = {
  namespaced: true,
  state,
  actions,
  mutations
};