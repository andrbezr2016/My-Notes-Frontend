import Vue from "vue"
import Router from "vue-router"


import Login from "../pages/LoginPage.vue"

Vue.use(Router)

const routes = [{
    path: '/',
    redirect: {
      name: 'room'
    }
  },
  {
    path: "/mynotes/*",
    name: "dashboard",
    component: MyNotes,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = new Router({
  routes: routes,
  mode: "history",
  base: process.env.BASE_URL,
});


export default router;