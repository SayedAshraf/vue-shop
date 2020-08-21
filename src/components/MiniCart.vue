<template>
  <div class="hello">
      <!-- Mini Cart Modal that open when Customer click on AddToCart -->
      <div class="modal fade" id="miniCart" tabindex="-1" role="dialog" aria-labelledby="miniCartLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <!-- model title -->
              <h5 class="modal-title" id="miniCartLabel">My Bag</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <!-- Model Body to listing customer Products  -->
            <div class="modal-body">
              <ul>
                <li v-for="(item , index) in this.$store.state.cart" :key="index.id" class="container">
                    <div class="row align-items-center">
                      <div class="col-xs-3 col-sm-3">
                        <img :src="item.ProductImage" alt=".." width="80px" />
                      </div>

                      <div class="col-xs-6 col-sm-6" >
                        <h4>{{ item.ProductName | capitalized }}</h4>
                        <h6>{{ item.ProductPrice*item.productQuantity | currency}}</h6>
                        <h6>Quantity {{ item.productQuantity }}</h6>
                      </div>

                      <div class="col-xs-3 col-sm-3">
                        <button type="button" class="remove btn btn-danger" @click="removeitem(item)">X</button>
                      </div>
                    </div>
                </li>
              </ul>
            </div>
            <!-- Model Footer contain two buttons CheckOut and Continue Shoping -->
            <div class="modal-footer d-flex justify-content-between">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Continue Shoping</button>
              <button type="button" class="btn btn-primary" @click="CheckOut">CheckOut</button>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "MiniCart",
  props: {
    
  },
  methods:{
    CheckOut(){
      $('#miniCart').modal('hide');
      this.$router.push('/checkout');
    },
    removeitem(item){
      this.$store.commit("removeFromCart", item)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul{
  list-style-type: none;
  margin: 0;
  padding: 0;
    li{
      margin: 0;
      padding: 0;
    }
  }
.remove{
    cursor: pointer;
}
</style>
