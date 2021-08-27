import { Service } from './index'
let Auth = {
  async signUp(userData) {
    let serverData = {
      username: userData.username,
      email: userData.email,
      password: userData.password,
      date: userData.date,
      savedRecepti: [],
      createdRecepti: [],
    }
    console.log(serverData)
    await Service.post('/user', serverData)

    await this.login(userData.username, userData.password)
    return true
  },

  async changeUserInfo(userData) {
    let serverData = {
      username: userData.username,
      email: userData.email,
      password: userData.password,
      date: userData.date,
    }
    console.log(serverData)
    await Service.patch('useracc', serverData)
    return
  },

  async getUserInfo() {
    let response = await Service.get('/useracc')
    let data = response.data
    return data
  },

  async login(username, password) {
    let response = await Service.post('/auth', {
      username,
      password,
    })
    let user = response.data

    localStorage.setItem('user', JSON.stringify(user))
    return true
  },

  logout() {
    localStorage.removeItem('user')
  },
  async getUserID() {
    let qq = await Service.get(`/userdata/${Auth.getUsersName()}`)
    console.log('qq', qq.data._id)
    return qq.data._id
  },
  getUser() {
    return JSON.parse(localStorage.getItem('user'))
  },
  getUsersName() {
    let user = Auth.getUser()
    if (user && user.token) {
      return user.username
    }
    return false
  },
  getToken() {
    let user = Auth.getUser()
    if (user && user.token) {
      return user.token
    } else return false
  },

  authenticated() {
    let user = Auth.getUser()
    if (user && user.token) {
      return true
    }
    return false
  },

  state: {
    get authenticated() {
      return Auth.authenticated()
    },
  },
}
export { Auth }
