import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import authentication from './modules/authentication'
import regions from './modules/regions'

import alert from './modules/alert'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    authentication,
    alert,
    regions
  },
  getters
})

export default store
