import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authorized: false,
    user: null
  },
  getters:{
    getUser: state => {
      return state.user;
    },
    getResume: state => {
      return state.resume;
    },
    getToken: state => {
      return state.token;
    }
  },
  mutations: {
    UPDATE_USER: (state, user) => {
      state.user = user;
    },
    TOGGLE: (state, value) => {
      state.authorized = value;
      if(!value){
        localStorage.removeItem('token');
      }
    }
  },
  actions: {
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
