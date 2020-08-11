<template>
  <div class="products">
    <div class="container h-100">
      <div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <h3>Products Page</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati, tenetur?
            </p>
          </div>
          <div class="col-md-6">
            <img
              src="../assets/img/svg/products.svg"
              alt="overview img"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- Retrive products from firebase -->
    <h3 class="float-left ">Products List</h3>
    <button class="btn btn-primary float-right" @click="AddProduct">Add Product</button>

    <!-- Update Model -->
    <div
      class="modal fade"
      id="add"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog add-model" role="document">
        <div class="modal-content">
          <!-- Model Header -->
          <div class="modal-header">
            <h5 class="modal-title" id="edit" v-if="model=='newProduct'">Add Product</h5>
            <h5 class="modal-title" id="edit" v-else-if="model=='editProduct'">Edit Product</h5>

            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <!-- Model Body -->
          <div class="modal-body">
            <div class="row">
              <!-- Main product -->
              <div class="col-md-8">
                <div class="form-group">
                  <input type="text" placeholder="Product Name" v-model="product.name" class="form-control" />
                </div>
                <div class="form-group">
                  <vue-editor v-model="product.description"></vue-editor>
                </div>
              </div>

              <!-- Product Sidebar -->
              <div class="col-md-4">
                <h4 class="display-6">Product Details</h4>
                <hr />

                <div class="form-group">
                  <input
                    type="text" placeholder="Product price" v-model="product.price" class="form-control"/>
                </div>

                <div class="form-group">
                  <input type="text" @keyup.188="addTag" placeholder="Product tags" v-model="tag" class="form-control"/>
                  <div class="tag-content">
                    <div v-for="Tag in product.tags" :key="Tag.index">
                    <span>{{Tag}}</span>
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <label for="product_image">Product Images</label>
                  <input type="file" @change="uploadImage($event)" class="form-control" />
                </div>

                <!-- Dispaying Product Images -->
                <div class="form-group d-flex" >
                  <div v-for="(image,index) in product.images" :key="index">
                    <div class="row">
                      <div class="img-section col">
                      <img :src="image" alt="productimage">
                      <span @click="DeleteImage(image , index)" > X </span>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Model Footer -->
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="addData" v-if="model=='newProduct'"> Save changes </button>
            <button type="button" class="btn btn-primary" @click="UpdateProduct(product)" v-else-if="model=='editProduct'"> Apply changes </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Bootstrap Table -->
    <table class="table">
      <thead class="table-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">modify</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(product, index) in products"
          :key="product.index"
          scope="row"
          class="item"
        >
          <td>{{ index + 1 }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>
            <button @click="EditProduct(product)" class="btn btn-primary">Edit</button>
            <button @click="DeleteProduct(product)" class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { fb, db } from "../firebase";
export default {
  name: "Products",
  components:{
    VueEditor,
  },
  data() {
    return {
      products: [],
      product: {
        name: null,
        price: null,
        description: null,
        images: [],
        tags: [],
      },
      AcriveProductID: null,
      model: null,
      tag: null,
    };
  },
  // Realtime Database power of vue-firestore
  firestore() {
    return {
      // Collection
      products: db.collection("products"),
    };
  },
  methods: {
    //Delete an collection from firebase by collection ID
    DeleteProduct(doc) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.value) {
          this.$firestore.products.doc(doc.id).delete();
          //sweet toast
          Toast.fire({
            icon: "success",
            title: "Product Deleted Successfully",
          });
        }
      });
    },
    //reset product when add a new
    reset(){
      this.product={
        name: null,
        price: null,
        description: null,
        images: [],
        tags: [],
      }
    },
    //funcion open update modal and call update function
    AddProduct(product) {
      this.reset();
      $("#add").modal("show");
      this.model = 'newProduct';
    },
    addData() {
      if(this.product.name != null && this.product.price != null) {
        this.addTag();
        this.$firestore.products.add(this.product);
        $("#add").modal("hide");
          Toast.fire({
            icon: "success",
            title: "Product Added Successfully",
          });
      }else{
        alert("Name and Price of Product");
      }
    },
    //Update function that update collection in firebase
    EditProduct(product) {
      $("#add").modal("show");
      this.model = 'editProduct';
      this.AcriveProductID = product.id;
      this.product = product;
    },
    //Update Product Function
    UpdateProduct(product){
      this.$firestore.products.doc(this.AcriveProductID).update(this.product);
      $("#add").modal("hide");
      Toast.fire({
        icon: "success",
        title: "Product Updated Successfully",
      });
    },
    //Add Tag Function
    addTag(){
      this.product.tags.push(this.tag);
      this.tag='';
    },
    //UploadImage
    uploadImage(e) {
      if(e.target.files[0]){ 
        //get the file
        let file = e.target.files[0];

        // Create a root reference
        var storageRef = fb.storage().ref('products/' + file.name);

        //upload to firestore storage
        let uploadTask = storageRef.put(file);

        uploadTask.on('state_changed', (snapshot) =>{
          }, (error) => {
            // Handle unsuccessful uploads
          }, () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.product.images.push(downloadURL);
              console.log('File available at', downloadURL);
            });
          });
      }
    },
    //Function Delete image
    DeleteImage(img , index){
      // Create a reference to the file to delete
      let image = fb.storage().refFromURL(img);
      this.product.images.splice(index , 1);

        // Delete the Image
        image.delete().then(function() {
          console.log("Image delteted Sucessufuly");
        }).catch(function(error) {
          // Uh-oh, an error occurred!
          console.log("an Error occuored");
      });

    },
  },
  created() {

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sec-crud {
  margin: 20px;
  font-size: 30px;
  color: #333;
  input {
    display: block;
    width: 100%;
    padding: 5px;
    margin: 10px 0px;
  }
  .btn {
    width: 100px;
    margin: 10px;
  }
}
.item {
  &:hover {
    background-color: #ddd;
    color: #fff;
  }
}
tr {
  padding: 5px;
  td {
    button {
      margin: 0 5px;
    }
  }
}
.add-model {
  max-width: 1000px;
}
.form-description {
  height: 190px;
}.tag-content{
  display: flex;
  overflow: auto;
  padding: 1px;
}
.img-section { 
 position:relative;
 padding: 1px 2px;
 img{
   width: 80px;
 }
  span{
    position: absolute;
    top: -10px;
    right: 0px;
    &:hover{
      cursor: pointer;
    }
  }
}
</style>
