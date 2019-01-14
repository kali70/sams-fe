import request from '@/utils/request'
let apiUrl = 'http://localhost:3000/api'
const regionsSvcUrl = 'v1/regions'

export const regionsService = {}

const regions = async () => request({
  url: `${apiUrl}/${regionsSvcUrl}`,
  method: 'get'
})

regionsService.getRegions = async () => {
  return regions().then(data => {
    console.log(data)
    return data
  })
}
