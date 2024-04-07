import { createWebHistory, createRouter } from "vue-router";

import ViewHome from "../views/ViewHome.vue";

import ViewLogin from "../views/ViewLogin.vue";
import ViewRegister from "../views/ViewRegister.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: ViewHome,
  },
  {
    path: "/login",
    name: "login",
    component: ViewLogin,
  },
  {
    path: "/register",
    name: "register",
    component: ViewRegister,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
