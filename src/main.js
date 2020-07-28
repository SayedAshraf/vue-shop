import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/app.scss";
import "jquery";
import "popper.js";
import "bootstrap";

//Reqistring Navbar as a global componenet
Vue.component("Navbar", require("./components/Navbar.vue").default);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
