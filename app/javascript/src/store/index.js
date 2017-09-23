export default {
  state: {
    auth: {
      uid: null,
      client: null,
      accessToken: null,
      isAuthenticated: false
    },
    isLoading: false
  },
  mutations: {
    authenticate: (state , payload) => {
      state.auth = payload.auth
    }
  },
  actions: {
    authenticate: (context , payload) => {
      context.commit('authenticate' , payload)
    }
  }
}