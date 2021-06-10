import axios from "axios";
import $router from "@/router";
let Service = axios.create({ baseURL: "http://localhost:3000", timeout: 1000 });
Service.interceptors.request.use((request) => {
  try {
    request.headers["Authorization"] = "Bearer " + Auth.getToken();
  } catch (e) {
    console.error(e);
  }
  return request;
});
Service.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status == 401 || error.response.status == 403) {
      Auth.logout();
      $router.go();
    }
  }
);
let recepti = {
  async createRecept(data) {
    let serverData = {
      naziv: data.naziv,
      src: data.src,
      prepTime: data.prepTime,
      cookTime: data.cookTime,
      sastojci: data.sastojci,
      steps: data.steps,
    };
    console.log("spremam", data);
    await Service.post("", serverData);
    return;
  },
  async makeChange(id) {
    let serverData = {
      naziv: id.naziv,
      src: id.src,
      prepTime: id.prepTime,
      cookTime: id.cookTime,
      sastojci: id.sastojci,
      steps: id.steps,
    };
    console.log("editam", id._id);
    await Service.patch(`/profil/${id.id}`, serverData);
    return;
  },

  async getOne(id) {
    let response = await Service.get(`/recepti/${id}`);
    let recept = response.data;
    return {
      id: recept._id,
      naziv: recept.naziv,
      src: recept.src,
      prepTime: recept.prepTime,
      cookTime: recept.cookTime,
      sastojci: recept.sastojci,
      steps: recept.steps,
      rating: recept.rating,
      date: recept.date,
    };
  },
  async getOneEdit(id) {
    let response = await Service.get(`/profil/${id}`);
    let recept = response.data;
    return {
      id: recept._id,
      naziv: recept.naziv,
      src: recept.src,
      prepTime: recept.prepTime,
      cookTime: recept.cookTime,
      sastojci: recept.sastojci,
      steps: recept.steps,
      rating: recept.rating,
      date: recept.date,
    };
  },

  async getAll(search) {
    let response = await Service.get(`?title=${search}`);
    let data = response.data;
    data = data.map((recept) => {
      return {
        id: recept._id,
        naziv: recept.naziv,
        src: recept.src,
        prepTime: recept.prepTime,
        cookTime: recept.cookTime,
        sastojci: recept.sastojci,
        steps: recept.steps,
        rating: recept.rating,
        date: recept.date,
      };
    });
    console.log(data);
    return data;
  },
};

let Auth = {
  async login(username, password) {
    let response = await Service.post("/auth", {
      username,
      password,
    });
    let user = response.data;

    localStorage.setItem("user", JSON.stringify(user));
    return true;
  },
  logout() {
    localStorage.removeItem("user");
  },
  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  },
  getToken() {
    let user = Auth.getUser();
    if (user && user.token) {
      return user.token;
    } else return false;
  },
  authenticated() {
    let user = Auth.getUser();
    if (user && user.token) {
      return true;
    }
  },
  state: {
    get authenticated() {
      return Auth.authenticated;
    },
  },
};
export { Service, recepti, Auth };
