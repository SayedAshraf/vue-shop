<template>
  <div class="home">
    <Navbar />
    <hero />
    <Product />
    <login></login>
  </div>
</template>

<script>
// @ is an alias to /src

import Hero from "@/components/Hero.vue";
import Product from "@/sections/Product.vue";
import Login from "@/components/Login.vue";

export default {
  name: "Home",
  components: {
    Hero,
    Product,
    Login,
  },
};
</script>
