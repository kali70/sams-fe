import { regionsService } from '../../services'
const getDefaultState = () => {
  return {
    regions: []
  }
}
const regions = {
  state: getDefaultState(),
  namespaced: true,
  actions: {
    getRegions ({ commit }) {
      return regionsService.getRegions()
        .then(
          data => {
            console.log('regions: ', data)
            commit('saveRegions', data)
          },
          error => {
            console.log('err: ', error)
          }
        )
    }
  },
  mutations: {
    saveRegions (state, regions) {
      state.regions = regions.data
    }
  }
}

export default regions
