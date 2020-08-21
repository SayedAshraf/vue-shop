<template>
  <!-- Component That i make for static products ,  before do Product List and get Products from database -->
  <div class="products" id="products">
    <div class="container">
      <h1 class="text-center p-5">Our Products</h1>
      <div class="row">
        
        <!-- items -->
        <div class="col-md-4">
          <div class="card product-item">
            <img
              src="../assets/img/products/product1.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Shoes Nike</h5>
              <p class="card-text">
                Description
              </p>
              <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card product-item">
            <img
              src="../assets/img/products/product2.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Shoes Adidas</h5>
              <p class="card-text">
                Description
              </p>
              <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card product-item">
            <img
              src="../assets/img/products/product3.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Shoes Adidas</h5>
              <p class="card-text">
                Description
              </p>
              <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Products",
  data(){
    return {
    }
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.products {
  margin-top: 7rem;
  background: #f2f2f2;
  padding-bottom: 3rem;
}
</style>
