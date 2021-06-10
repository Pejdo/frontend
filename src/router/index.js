import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import login from "../views/Login.vue";
import Registracija from "../views/Registracija.vue";
import Recept from "../views/Recept.vue";
import newRecipe from "../views/UnosRecepta.vue";
import Profil from "../views/Profil.vue";
import { Auth } from "@/services";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/recepti/:id",
    props: true,
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/prijava",
    name: "Prijava",
    component: login,
  },
  {
    path: "/registracija",
    name: "Registracija",
    component: Registracija,
  },
  {
    path: "/recept",
    name: "Recept",
    component: Recept,
  },
  {
    path: "/newrecept",
    name: "newRecipe",
    component: newRecipe,
  },
  {
    path: "/profil/:id",
    props: true,
    name: "Profil",
    component: Profil,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = ["/registracija", "/prijava"];
  const loginPotreban = !publicPages.includes(to.path);
  let user = Auth.getUser();
  console.log(user);
  if (loginPotreban && !user) {
    return next("/prijava");
  }
  next();
});
export default router;
