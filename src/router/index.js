import Vue from "vue";
import VueRouter from "vue-router";
import Edit from "../views/Edit.vue";
import Main from "../views/Main.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/post/:id",
    name: "Edit",
    component: Edit,
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
