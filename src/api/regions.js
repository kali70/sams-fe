import auth from '@/utils/auth'
import request from '@/utils/request'
const api_v1 = '/api/v1/';
export const userService = {
  login,
  logout
}

let regions = async () => request({
  url: `${api_v1}/regions`,
  method: 'get'
})

let getRegions = async (username, password) => {
  regions()
    .then(regions => {
      console.log(regions);
    })
}
