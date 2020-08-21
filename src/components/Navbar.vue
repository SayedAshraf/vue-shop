<template>
  <div class="hello">
    <nav class="navbar custom-nav fixed-top navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <!-- Navbar title and it route to home page -->
        <router-link class="navbar-brand" to="/">OnlineShop</router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- listing NavBar links -->
          <ul class="navbar-nav mr-auto">
            <!-- Home Link -->
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
           <!-- Product Link -->
            <li class="nav-item">
              <router-link to="/productlist" class="nav-link">Products</router-link>
            </li>
            <!-- About Link -->
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
          </ul>

          <form class="form-inline my-2 my-lg-0">
            <!-- <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> -->
            <a class="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#login" >GetStart</a>
            <a class="btn btn-outline-info border-0 mx-2 my-2 my-sm-0" data-toggle="modal" data-target="#miniCart">
              <i class="fas fa-cart-plus"></i>
            </a>
          </form>

        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media (min-width: 992px) {
  .navbar.custom-nav {
    padding-top: 12px;
    padding-bottom: 12px;
    //background-color: #ddd !important;
  }
}
</style>
