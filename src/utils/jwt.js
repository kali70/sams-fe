const jwtSvc = {}

const tokenName = 'token'

let token
const parse = (jwt) => {
  console.log(jwt)
  let base64Url = jwt.split('.')[1]
  const base64 = base64Url.replace('-', '+').replace('_', '/')
  return JSON.parse(window.atob(base64))
}

jwtSvc.getEmail = () => {
  token = localStorage.getItem(tokenName)
  const email = token ? parse(token).email : null
  return email
}

jwtSvc.getDatabase = () => {
  token = localStorage.getItem(tokenName)
  const data = parse(token)
  return data.database
}

jwtSvc.getUserId = () => {
  token = localStorage.getItem(tokenName)
  const data = parse(token)
  return data.user_id
}

jwtSvc.setToken = (jwt) => {
  localStorage.setItem(tokenName, jwt)
}

jwtSvc.getToken = () => {
  token = localStorage.getItem(tokenName)
  return token
}

jwtSvc.getUserRole = () => {
  token = localStorage.getItem(tokenName)
  const data = parse(token)
  return data.role
}

jwtSvc.getUserType = () => {
  token = localStorage.getItem(tokenName)
  const data = parse(token)
  return data.type
}

jwtSvc.removeToken = () => {
  token = localStorage.removeItem(tokenName)
}

jwtSvc.isExpired = () => {
  token = localStorage.getItem(tokenName)
  const expiryDate = parse(token).exp
  return expiryDate * 1000 < new Date().getTime()
}

export default jwtSvc
