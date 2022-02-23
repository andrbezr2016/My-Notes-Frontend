import { createRouter, createWebHistory } from "vue-router";
import { isAuthenticated } from "../storage";

import Login from "../pages/Login.vue";
import Registration from "../pages/Registration.vue";
import Dashboard from "../pages/Dashboard.vue";
import NotFound from "../pages/NotFound.vue";

const ifNotAuthenticated = (to, from, next) => {
  if (!isAuthenticated()) {
    next();
    return;
  }
  next("/home");
};

const ifAuthenticated = (to, from, next) => {
  if (isAuthenticated()) {
    next();
    return;
  }
  next("/login");
};

const routes = [
  {
    path: "/",
    redirect: {
      name: "Login",
    },
  },
  {
    path: "/home",
    name: "Dashboard",
    component: Dashboard,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: ifNotAuthenticated,
  },
  {
    path: "/registration",
    name: "Registration",
    component: Registration,
    beforeEnter: ifNotAuthenticated,
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
