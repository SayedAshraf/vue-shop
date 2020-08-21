import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

let cart = window.localStorage.getItem("key");

const store = new Vuex.Store({
  //State data for Storage
  state: {
    cart: cart ? JSON.parse(cart) : [],
  },
  mutations: {
    //Add To Cart function
    addToCart(state, item) {
      let found = state.cart.find((product) => product.ProductID == item.ProductID);
      if (found) {
        found.productQuantity++;
      } else {
        state.cart.push(item);
      }
      this.commit("saveData");
    },
    //Save Data in Local Sotrage
    saveData(state) {
      window.localStorage.setItem("key", JSON.stringify(state.cart));
    },
    //Remove Item From Cart and save data into local storage
    removeFromCart(state, item) {
      let index = state.cart.indexOf(item);
      state.cart.splice(index, 1);
      this.commit("saveData");
    },
  },
});

export default store;
