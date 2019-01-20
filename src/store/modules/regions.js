import { regionsService } from '../../services'
const getDefaultState = () => {
  return {
    regions: [],
    region: []
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
            commit('saveRegions', data)
          },
          error => {
            console.log('err: ', error)
          }
        )
    },
    getRegionByID ({ commit }, id) {
      return regionsService.getRegionByID(id)
        .then(
          data => {
            commit('saveRegion', data)
            return data
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
    },
    saveRegion (state, region) {
      state.region = region.data
    }
  }
}

export default regions
