import { loadUsers } from '../../api/requests';

export const usersModule = {
  namespaced: true, 
  state() {
    return {
      users: [],
    }
  },

  getters: {
    getUsers(state, getters, rootState, rootGetters) {
      console.log('State: ', state);
      console.log('Getters: ', getters);
      console.log('Root state: ', rootState);
      console.log('Root getters: ', rootGetters);

      return state.users;
    },
  },

  mutations: {
    fillUsers(state, payload) {
      state.users = payload;
    },

    clearUsers(state) {
      state.users = [];
    },
  },

  actions: {
    async fillUsers(context) {
      const users = await loadUsers();

      context.commit('fillUsers', users);
    },
  }
};
