<template>
  <div class="home">
    <Navbar></Navbar>
    <hero></hero>
    <Product></Product>
  </div>
</template>

<script>
// @ is an alias to /src

import Hero from "@/components/Hero.vue";
import Product from "@/sections/Product.vue";

export default {
  name: "Home",
  components: {
    Hero,
    Product,
  },
};
</script>
