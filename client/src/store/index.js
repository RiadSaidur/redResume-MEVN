import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authorized: false,
    user: null,
    resume: null
  },
  getters:{
    getUser: state => {
      return state.user;
    },
    getResume: state => {
      return state.resume;
    }
  },
  mutations: {
    UPDATE_RESUME: (state, resume) => {
      state.resume = resume;
    },
    UPDATE_USER: (state, user) => {
      state.user = user;
    },
    TOGGLE: (state, value) => {
      state.authorized = value;
    }
  },
  actions: {
    updateResume: (context, resume) => {
      context.commit('UPDATE_RESUME', resume);
    },
    updateUser: (context, user) => {
      context.commit('UPDATE_USER', user);
    },
    toggleAuth: (context, value) => {
      context.commit('TOGGLE', value);
    }
  },
  modules: {
  }
})
