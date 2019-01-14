import { userService } from '../../services'
import { router } from '../../router'
import jwtSvc from '../../utils/jwt'

const username = jwtSvc.getEmail()
const initialState = username ? { status: { loggedIn: true }, username } : { status: {}, token: null }

const authentication = {
  namespaced: true,
  state: initialState,
  actions: {
    login ({ dispatch, commit }, { username, password }) {
      commit('loginRequest', { username })

      userService.login(username, password)
        .then(
          user => {
            commit('loginSuccess', user)
            router.push('/')
          },
          error => {
            commit('loginFailure', error)
            dispatch('alert/error', error, { root: true })
          }
        )
    },
    logout ({ commit }) {
      userService.logout()
      commit('logout')
    }
  },
  mutations: {
    loginRequest (state, user) {
      state.status = { loggingIn: true }
      state.username = user.username
    },
    loginSuccess (state, user) {
      jwtSvc.setToken(user.data)
      state.status = { loggedIn: true }
      state.username = jwtSvc.getEmail()
    },
    loginFailure (state) {
      state.status = {}
      state.username = null
    },
    logout (state) {
      state.status = {}
      state.username = null
    }
  }
}

export default authentication
