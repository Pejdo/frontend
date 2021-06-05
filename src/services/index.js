import axios from "axios";

let Service = axios.create({ baseURL: "http://localhost:3000", timeout: 1000 });

let recepti = {
  async createRecept(data) {
    let serverData = {
      naziv: data.naziv,
      url: data.dialogImageUrl,
      prepTime: data.prepTime,
      cookTime: data.cookTime,
      sastojci: data.sastojci,
      steps: data.steps,
      date: new Date(),
    };
    console.log("spremam", data);
    await Service.post("", serverData);
    return;
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
      };
    });
    console.log(data);
    return data;
  },
};
export { Service, recepti };
