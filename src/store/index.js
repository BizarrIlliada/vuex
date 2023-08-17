import { createStore } from 'vuex';
import { counterModule } from './modules/counterModule';
import { usersModule } from './modules/usersModule';

const store = createStore({
  state() {
    return {
      isLoggedIn: false,
    }
  },

  getters: {
    getIsLoggedIn(state, getters, rootState, rootGetters) {
      console.log(getters, rootState, rootGetters);

      return state.isLoggedIn;
    }
  },

  mutations: {
    changeIsLoggedIn(state, payload) {
      state.isLoggedIn = payload;
    },
  },

  actions: {
    login(context) {
      context.commit('changeIsLoggedIn', true);
    },

    logout(context) {
      context.commit('changeIsLoggedIn', false);
      context.commit('counterModule/clearCounter');
    },
  },

  modules: {
    counterModule,
    usersModule,
  },
});

export default store;
