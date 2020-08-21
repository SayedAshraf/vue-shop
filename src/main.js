import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { fb } from "./firebase.js";
import vuefirestore from "vue-firestore";
Vue.use(vuefirestore, {
  key: "id", // the name of the property. Default is '.key'.
  enumerable: true, //  whether it is enumerable or not. Default is true.
});

import "./assets/app.scss";
import jQuery from "jquery";
import "popper.js";
import "bootstrap";
window.$ = window.jQuery = jQuery;

import "./assets/SweetAlert";

//Reqistring Navbar as a global componenet
Vue.component("Navbar", require("./components/Navbar.vue").default);
Vue.component("add-to-cart", require("./components/AddToCart.vue").default);

//adding vue carousal
import VueCarousel from "vue-carousel";
Vue.use(VueCarousel);

//vue fillter
import Vue2Filters from "vue2-filters";
Vue.use(Vue2Filters);

Vue.config.productionTip = false;

//Get the currently signed-in user
let app = "";
fb.auth().onAuthStateChanged(function(user) {
  if (!app) {
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
