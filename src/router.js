import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Admin from "./views/Admin.vue";
import Overview from "./views/Overview.vue";
import Orders from "./views/Orders.vue";
import Profile from "./views/Profile.vue";
import Products from "./views/Products.vue";
import Checkout from "./views/Checkout.vue";
import ProdctList from "./sections/ProdctList.vue";
import { fb } from "./firebase.js";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
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
      path: "/productlist",
      name: "ProductList",
      component: ProdctList,
    },
    {
      path: "/checkout",
      name: "Checkout",
      component: Checkout,
    },
    {
      path: "/admin",
      name: "Admin",
      component: Admin,
      meta: { requiresAuth: true }, // when routing admin making some auth function
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
          path: "profile",
          name: "profile",
          component: Profile,
        },
        {
          path: "products",
          name: "Products",
          component: Products,
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const requireAuth = to.matched.some((x) => x.meta.requiresAuth); // check if router meta == true
  const CurrentUser = fb.auth().currentUser;
  // this route requires auth, check if logged in
  // if not, redirect to login page.
  if (requireAuth && !CurrentUser) {
    next("/");
  } else if (requireAuth && CurrentUser) {
    next();
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;
