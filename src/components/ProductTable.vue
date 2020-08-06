<template v-model="index">
  <div>
    <!-- Bootstrap Table -->
    <table class="table">
      <thead class="table-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Description</th>
          <th scope="col">Tags</th>
          <th scope="col">modify</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" scope="row" class="item">
          <td>{{ index + 1 }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.tag }}</td>
          <td>
            <button @click="EditProduct(product)" class="btn btn-primary">
              Edit
            </button>
            <button
              @click="$emit('DeleteFun', products, index)"
              class="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "Producttable",
  props: {
    products: null,
  },
  methods: {},
};
</script>
,<style lang="scss" scoped>
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
}
</style>
