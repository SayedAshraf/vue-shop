import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Admin from "./views/Admin.vue";
import Overview from "./views/Overview.vue";
import Orders from "./views/Orders.vue";
import Products from "./views/Products.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    children: [
      {
        path: "overview",
        name: "Overview",
        component: Overview,
      },
      {
        path: "orders",
        name: "Orders",
        component: Orders,
      },
      {
        path: "products",
        name: "Products",
        component: Products,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
