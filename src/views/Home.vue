<template>
  <div class="home">
    <Navbar />
    <hero />
    <ProdctList />
    <login></login>
    <mini-cart />
  </div>
</template>

<script>
// @ is an alias to /src

import Hero from "@/components/Hero.vue";
import Product from "@/sections/Product.vue";
import Login from "@/components/Login.vue";
import MiniCart from "@/components/MiniCart.vue";
import ProdctList from "@/sections/ProdctList.vue";

export default {
  name: "Home",
  components: {
    Hero,
    Product,
    Login,
    ProdctList,
    MiniCart,
  },
};
</script>
