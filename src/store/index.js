import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: false
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    isLogggedIn() {
      return store.state.loggedIn;
    }
  }
})
