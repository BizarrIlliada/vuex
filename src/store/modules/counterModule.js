export const counterModule = {
  namespaced: true,
  state() {
    return {
      counter: 0,
    }
  },

  getters: {
    getCounter(state) {
      return state.counter;
    },

    getFavoriteCounter(_, getters) {
      return getters.getCounter * 3;
    },
  },

  mutations: {
    increment(state) {
      state.counter++;
    },

    increase(state, payload) {
      console.log(state);
      state.counter += payload.value;
    },

    clearCounter(state) {
      state.counter = 0;
    },
  },

  actions: {
    increment(context) {
      context.commit('increment');
    },

    increase(context, payload) {
      context.commit('increase', payload);
    },
  },
}
