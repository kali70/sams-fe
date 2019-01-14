import auth from '@/utils/auth'
import request from '@/utils/request'
const api_v1 = '/api/v1/';
export const userService = {
  login,
  logout
}

let loginReq = async (username, password) => request({
  url: `${api_v1}/login`,
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ username, password })
})

let login = async (username, password) => {
  loginReq(username, password)
    .then(handleResponse)
    .then(user => {
      console.log(user);
    })
}

let logout = () => {
  localStorage.removeItem('token')
}
