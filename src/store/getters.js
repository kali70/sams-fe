const getters = {
  baseUrl: state => state.app.baseUrl,
  baseHref: state => state.app.baseHref,
  authentication: state => state.authentication.status.loggedIn,
  regions: state => state.regions.regions,
  region: state => state.regions.region

}
export default getters
