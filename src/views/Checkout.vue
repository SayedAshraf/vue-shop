<template>
  <div class="checkout">
    <Navbar />
    <div class="container mt-5 pt-5">
      <div class="row" style="background-color:#DDD;">
        <div class="col-md-9">
          <h4 class="checkheader">Checkout</h4>
          <ul>
            <li v-for="(item , index) in this.$store.state.cart" :key="index.id" class="container">
                <div class="row align-items-center">
                  <div class="col-xs-3 col-sm-3">
                    <img :src="item.ProductImage" alt=".." width="80px" />
                  </div>

                  <div class="col-xs-6 col-sm-6">
                    <h4>{{ item.ProductName | capitalize }}</h4>
                    <h6>{{ item.ProductPrice*item.productQuantity | currency}}</h6>
                    <h6>Quantity {{ item.productQuantity }}</h6>
                  </div>

                  <div class="col-xs-3 col-sm-3">
                     <button type="button" class="remove btn btn-danger" @click="$store.commit('removeFromCart',item)">Remove</button>
                  </div>
                </div>
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <h4 class="checkprice">Total Price</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "checkout",
};
</script>
<style lang="scss" scoped>
ul{
  list-style-type: none;
  padding-left: 0px;
}
.checkheader{
    text-align: left;
    padding: 20px;
}
.checkprice{
    text-align: right;
    padding: 20px;
}
</style>