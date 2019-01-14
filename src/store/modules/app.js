import request from '@/utils/request'

const devBaseURL = 'http://localhost:8080/'
const app = {
  state: {
    baseURL: {
      isConfigures: false
    },
    baseHref: ''
  },
  mutations: {
    SET_BASE_URL: (state) => {
      if (!state.baseURL.isConfigured) {
        const baseUrl = process.env.NODE_ENV === 'development' ? devBaseURL : localStorage.getItem('base_url')
        request.defaults.baseURL = baseUrl
        state.baseUrl.isConfigured = true
        state.baseUrl.value = baseUrl
      }
    },
    SET_BASE_HREF: (state) => {
      if (state.baseHref === '') {
        state.baseHref = process.env.NODE_ENV === 'development' ? '' : '/education'
      }
    }
  },
  actions: {
    setbaseURL ({commit}) {
      commit('SET_BASE_URL')
    },
    setBaseHref ({commit}) {
      commit('SET_BASE_HREF')
    }
  }
}

export default app
