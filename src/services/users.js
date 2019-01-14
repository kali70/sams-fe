import request from '@/utils/request'

let apiUrl = 'http://localhost:3000/api'
const loginSvcUrl = 'v1/login'

export const userService = {}

const login = async (username, password) => request({
  url: `${apiUrl}/${loginSvcUrl}`,
  method: 'post',
  data: {email: username, password: password}
})

userService.login = async (username, passord) => {
  return login(username, passord).then(data => {
    return data
  })
}
const logout = async () => {
  localStorage.removeItem('token')
}
userService.logout = async () => {
  await logout()
}
