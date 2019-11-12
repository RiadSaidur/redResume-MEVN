import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.token,
    authorized: false,
    user: null,
    resume: {
      personal: {
        name: '',
        address: '',
        email: '',
        mobile: '',
        dob: '',
        sex: ''
      },
      education: [{
        type: '',
        year: '',
        institute: '',
        gpa: ''
      }],
      info: {
        father: '',
        mother: '',
        status: '',
        hobby: '',
        religion: '',
        blood: '',
        nationality: '',
        permanent: ''
      },
      languages: '',
      skills: ''
    }
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
