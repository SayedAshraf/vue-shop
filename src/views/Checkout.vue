<template>
  <div class="checkout">
    <Navbar />
    <div class="container mt-5 pt-5">
      <div class="row" style="background-color:#DDD;">
        <div class="col-md-9">
          <!-- Checkout Titlle -->
          <h4 class="checkheader">Checkout</h4>
          <!-- in this list i get a cart from storage and looping to get items from array -->
          <ul>
            <li v-for="(item , index) in this.$store.state.cart" :key="index.id" class="container">
                <div class="row align-items-center">
                  <div class="col-xs-3 col-sm-3">
                    <img :src="item.ProductImage" alt=".." width="80px" />
                  </div>
                  <!-- list body that contains a product name , Price and Qty -->
                  <div class="col-xs-6 col-sm-6">
                    <h4>{{ item.ProductName | capitalize }}</h4>
                    <h6>{{ item.ProductPrice*item.productQuantity | currency}}</h6>
                    <h6>Quantity {{ item.productQuantity }}</h6>
                  </div>
                  <!-- button to remove items from checkout list -->
                  <div class="col-xs-3 col-sm-3">
                     <button type="button" class="remove btn btn-danger" @click="$store.commit('removeFromCart',item)">Remove</button>
                  </div>
                </div>
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <h4 class="checkprice">Total Price</h4>
          <h3>{{ SumTotalPrice | currency }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "checkout",
  data(){
    return{
      // totalPricee: 0,
    }
  }, 
  computed:{ 
    //Computed Function that sum a total product Price
    SumTotalPrice(){
      let totalPricee = 0;
      for(let i = 0; i < this.$store.state.cart.length; i++){ 
        // console.log(this.$store.state.cart[i]);
        if (this.$store.state.cart[i].productQuantity != 1 ){
          totalPricee += (parseFloat(this.$store.state.cart[i].ProductPrice)*this.$store.state.cart[i].productQuantity)
        }
        else{
          totalPricee += parseFloat(this.$store.state.cart[i].ProductPrice)
        }
      }
      return totalPricee;
   }
  }
}

</script>
<style lang="scss" scoped>
ul{
  list-style-type: none;
  padding-left: 0px;
}
.checkheader{
    font-weight: bold;
    text-align: left;
    padding: 20px;
}
.checkprice{
    text-align: left;
    padding: 20px;
    font-weight: bold;
}
</style>