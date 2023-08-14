import { createStore } from 'vuex';
import { loadUsers } from '../api/requests';

const store = createStore({
  state() {
    return {
      counter: 0,
      users: [],
    }
  },

  getters: {
    getCounter(state) {
      return state.counter;
    },

    getFavoriteCounter(_, getters) {
      return getters.getCounter * 3;
    },

    getUsers(state) {
      return state.users;
    }
  },

  mutations: {
    increment(state) {
      state.counter++;
    },

    increase(state, payload) {
      state.counter += payload.value;
    },

    fillUsers(state, payload) {
      state.users = payload;
    }
  },

  actions: {
    increment(context) {
      console.log(context);
      context.commit('increment');
    },

    increase(context, payload) {
      context.commit('increase', payload);
    },

    async fillUsers(context) {
      const users = await loadUsers();

      context.commit('fillUsers', users);
    }
  },
});

export default store;
