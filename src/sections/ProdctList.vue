<template>
  <div class="products" id="products">
    <Navbar />
    <div class="container">
      <!-- Product List title  -->
      <h1 class="text-center p-5">Products List</h1>
      <div class="row">
        <div
          class="itemcard col-sm-4" v-for="(product, index) in products" :key="index.id">
          <div class="card">
            
            <!-- Vue Carousul to show array of Images -->
            <carousel :perPage="1" class="product-img">
              <slide v-for="(img, index) in product.images" :key="index.id">
                <img :src="img" class="card-img-top" alt="..." />
              </slide>
            </carousel>
            
            <!-- Cart Cody That Contain Name / Price / Description -->
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <h5 class="card-title">{{ product.name | uppercase }}</h5>
                <h5 class="card-priceS">{{ product.price | currency }}</h5>
              </div>
              <!-- <p class="card-text" v-html="product.description"></p> -->
            </div>

            <!-- AddtoCart Component  -->
            <div class="car-footer">
              <add-to-cart class="order-btn"
                :image="getImage(product.images)"
                :productId="product.id"
                :price="product.price"
                :name="product.name">
              </add-to-cart>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb, db } from "../firebase";
export default {
  name: "ProductList",
  //firestore for realtime database
  firestore() {
    return {
      products: db.collection("products"),
    };
  },
  data() {
    return {
      Products: [],
    };
  },
  methods: {
    //Functio to get image to retrive it in mini cart
    getImage(images) {
      console.log('get image from ProductList');
      return images[0];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.products {
  padding-top: 7rem;
  background: #f2f2f2;
  // padding-bottom: 3rem;
}
.itemcard {
  margin-bottom: 15px;
  .product-img {
    width: 100%;
    height: 400px;
    //object-fit: cover;
  }
  .card-body {
    position: relative;
    height: 180px;
  }
  .car-footer {
    display: flex;
    justify-content: center;
    align-content: center;
    .order-btn {
      position: absolute;
      bottom: 10px;
    }
  }
}
</style>
