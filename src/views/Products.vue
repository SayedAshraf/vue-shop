<template>
  <div class="products">
    <div class="container h-100">
      <div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <h3>Products Page</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati, tenetur? Laboriosam neque optio saepe natus quaerat,
              placeat in voluptatum ea iste excepturi nulla fuga sint quisquam
              iusto error voluptas velit.
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
    <div class="sec-crud container">
      <label> Basic CRUD Operations firebase (ADD/SET/GET/DELETE/UPDATE)</label>
      <input
        type="text"
        placeholder="Enter Product name"
        class="form-control"
        v-model="product.name"
      />
      <input
        type="text"
        placeholder="Enter Product Price"
        class="form-control"
        v-model="product.price"
      />
      <div class="form-group container">
        <button type="button" class="btn btn-primary" @click="ADD">
          Submit
        </button>
      </div>
    </div>
    <!-- Retrive products from firebase -->
    <h3>Products List</h3>
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
          <td>{{ product.data().name }}</td>
          <td>{{ product.data().price }}</td>
          <td>
            <button @click="EditProduct(product.id)" class="btn btn-primary">
              Edit
            </button>
            <button @click="DeleteProduct(product.id)" class="btn btn-danger">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Update Model -->
    <div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="edit">Update Product</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <label>Product Name</label>
            <input type="text" class="form-control" v-model="product.name" />
            <label>Product Price</label>
            <input type="text" class="form-control" v-model="product.price" />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { fb, db } from "../firebase";
import $ from "jquery";
export default {
  name: "Products",
  data() {
    return {
      products: [],
      product: {
        name: null,
        price: null,
      },
      curentItemID: null,
    };
  },
  methods: {
    //Get Data from firebase
    GetData() {
      db.collection("products")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            this.products.push(doc);
          });
        });
    },
    //Add Function that add in firebase
    ADD() {
      db.collection("products")
        .add(this.product)
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          this.GetData();
          //this.clear();
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    },
    //reset component data after i submit
    clear() {
      Object.assign(this.$data, this.$options.data.apply(this));
    },
    //Delete an collection from firebase by collection ID 
    DeleteProduct(doc) {
      if (confirm("Are you sure u want to delete it!")) {
        db.collection("products")
          .doc(doc)
          .delete()
          .then(function() {
            console.log("Document successfully deleted!");
          })
          .catch(function(error) {
            console.error("Error removing document: ", error);
          });
      } else {
        console.log("3al2");
      }
    },
    //funcion open update modal and call update function
    EditProduct(doc) {
      $("#edit").modal("show");
      this.curentItemID = doc.id;
      this.UpdateProduct();
    },
    //Update function that update collection in firebase
    UpdateProduct() {
      console.log("sayed");
    },
  },
  created() {
    this.GetData();
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
</style>
