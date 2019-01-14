const auth = {}
auth.getAuthToken = () => localStorage.getItem('token')

export default auth
