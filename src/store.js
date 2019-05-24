import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    additional: "Sorry nothing to add yet"

  },
  getters: {
  },
  mutations: {
    add: (state, payload) => {
      state.additional = payload
    },
    login: (state, payload) => {
      fetch("http://localhost:5000/user/login", {method:"post", body:JSON.stringify(payload)})
      .then(res => {
        state.auth_token = res.auth_token
      })
    }
  },
  actions: {

    

  }
})
