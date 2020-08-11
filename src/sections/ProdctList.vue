<template>
  <div class="products" id="products">
    <div class="container">
      <h1 class="text-center p-5">Products List</h1>
      <div class="row">

        <div class="col-md-4" v-for="(product,index) in products" :key="index.id">
          <div class="card product-item">
            
            <carousel :perPage="1">
              <slide v-for="(img, index) in product.images" :key="index.id">
                <img :src="img" class="card-img-top" alt="..."/>
              </slide>
            </carousel>


            <div class="card-body">
              <div class="d-flex justify-content-between">
              <h5 class="card-title">{{ product.name }}</h5>
              <h5 class="card-priceS">{{ product.price }}</h5>
              </div>
              <!-- <p class="card-text" v-html="product.description"></p> -->
              <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {fb , db} from "../firebase"
export default {
  name: "ProductList",
  firestore(){
      return {
        products: db.collection('products'),
      }
  },
  data() {
    return {
      Products: [],
    };
  },
  methods:{

    getImage(images){
      return images[0];
    }

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
// .product-item{
//     height: 500px;
//   }
</style>
