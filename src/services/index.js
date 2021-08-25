import axios from 'axios'
import $router from '@/router'
import { Auth } from './auth'
let Service = axios.create({ baseURL: 'http://localhost:3000', timeout: 1000 })

Service.interceptors.request.use((request) => {
  try {
    request.headers['Authorization'] = 'Bearer ' + Auth.getToken()
  } catch (e) {
    console.error(e)
  }
  return request
})

Service.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status == 401 || error.response.status == 403) {
      Auth.logout()
      $router.go()
    }
  }
)

let recepti = {
  async createRecept(data) {
    let serverData = {
      username: Auth.getUsersName(),
      naziv: data.naziv,
      kategorije: data.kategorije,
      src: data.src,
      prepTime: data.prepTime,
      cookTime: data.cookTime,
      sastojci: data.sastojci,
      steps: data.steps,
      rating: [],
    }
    console.log('spremam', data)
    await Service.post('', serverData)
    return
  },

  async makeChange(id) {
    let serverData = {
      naziv: id.naziv,
      src: id.src,
      prepTime: id.prepTime,
      cookTime: id.cookTime,
      sastojci: id.sastojci,
      steps: id.steps,
    }
    console.log('editam', id._id)
    await Service.patch(`/profil/${id.id}`, serverData)
    return
  },

  async getOne(id) {
    let response = await Service.get(`/recepti/${id}`)
    let recept = response.data
    return {
      id: recept._id,
      username: recept.korisnik,
      naziv: recept.naziv,
      kategorije: recept.kategorije,
      src: recept.src,
      prepTime: recept.prepTime,
      cookTime: recept.cookTime,
      sastojci: recept.sastojci,
      steps: recept.steps,
      rating: recept.rating,
      date: recept.date,
    }
  },

  async getOneEdit(id) {
    let response = await Service.get(`/profil/${id}`)
    let recept = response.data
    return {
      id: recept._id,
      naziv: recept.naziv,
      src: recept.src,
      kategorije: recept.kategorije,
      prepTime: recept.prepTime,
      cookTime: recept.cookTime,
      sastojci: recept.sastojci,
      steps: recept.steps,
      rating: recept.rating,
      date: recept.date,
    }
  },

  async getAll(search) {
    console.log('ovo je search ' + search)
    let response = await Service.get(`?naziv=${search}`)
    let data = response.data
    data = data.map((recept) => {
      return {
        id: recept._id,
        username: recept.username,
        naziv: recept.naziv,
        kategorije: recept.kategorije,
        src: recept.src,
        prepTime: recept.prepTime,
        cookTime: recept.cookTime,
        sastojci: recept.sastojci,
        steps: recept.steps,
        rating: recept.rating,
        date: recept.date,
      }
    })
    console.log(data)
    return data
  },
  async usersRecipes(search) {
    let response = await Service.get(`/useracc/${search}`)
    let data = response.data
    data = data.map((recept) => {
      return {
        id: recept._id,
        username: recept.username,
        naziv: recept.naziv,
        kategorije: recept.kategorije,
        src: recept.src,
        prepTime: recept.prepTime,
        cookTime: recept.cookTime,
        sastojci: recept.sastojci,
        steps: recept.steps,
        rating: recept.rating,
        date: recept.date,
      }
    })
    console.log(data)
    return data
  },
  async deleteRecipe(id) {
    return await Service.delete(`/recept/${id}`)
  },
  async kategorijaSearch(search) {
    let response = await Service.get(`/kategorija/${search}`)
    let data = response.data
    data = data.map((recept) => {
      return {
        id: recept._id,
        username: recept.username,
        naziv: recept.naziv,
        kategorija: recept.kategorija,
        src: recept.src,
        prepTime: recept.prepTime,
        cookTime: recept.cookTime,
        sastojci: recept.sastojci,
        steps: recept.steps,
        rating: recept.rating,
        date: recept.date,
      }
    })
    console.log(data)
    return data
  },
  async rateRecept(value) {
    await Service.patch(`/recepti/${value.id}`, value)
    return
  },
}
export { Service, recepti }
