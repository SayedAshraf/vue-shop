<template>
  <div class="addtocart">
      <!-- AddToCard Button When Click m it add to state -->
    <button href="#" class="btn btn-primary" @click="AddToCart()">AddToCart</button>
  </div>
</template>

<script>
export default {
  name: "add-to-cart",
  
  //Component Propertys
  props: {
    name: String,
    productId: String,
    price: String,
    image: String,
  },
  data() {
    return {
      item: {
        ProductImage: this.image,
        ProductName: this.name,
        ProductID: this.productId,
        ProductPrice: this.price,
        productQuantity: 1,
      },
    };
  },
  methods: {
    //AddtoCart method it open a model then commit in Store
    AddToCart() {
      $("#miniCart").modal("show");
      this.$store.commit("addToCart", this.item);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
