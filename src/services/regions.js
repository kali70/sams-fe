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

const regionByID = async (id) => request({
  url: `${apiUrl}/${regionsSvcUrl}/${id}`,
  method: 'get'
})
regionsService.getRegionByID = async (id) => {
  return regionByID(id).then(data => {
    console.log(data)
    return data
  })
}
