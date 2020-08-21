<template>
  <div class="hero">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="hero-body col-md-5 col-sm-12">
          <div class="hero-content mt-6">
            <h1 class="hero-title">OnlineShop</h1>
            <!-- Decription in Hero page  -->
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              numquam tempora, iure delectus totam minus quam aperiam ratione dolores magni.
            </p>
            <!-- The Explore and Prodcts Buttons -->
            <div class="hero-btn row">
              <button class="btn btn-info col-md-5 col-sm-5 col-xs-5 mr-2 ml-2 mt-2 mb-2">Explore</button>
              <button class="btn btn-outline-secondary col-md-5 col-xs-5 mr-2 ml-2 mt-2 mb-2">Products</button>
            </div>
          </div>
        </div>
        <!-- Image Section in Hero Page -->
        <div class="col-md-7 col-sm-12">
          <div class="graphic">
            <img src="../assets/img/svg/graphic.svg" alt="grapic image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hero {
  width: 100%;
  text-align: left;
  .hero-title{
    padding-top: 100px;
    padding-bottom: 50px;
  }
  .graphic{
    padding-top: 100px;
    padding-bottom: 50px;
  }
  .hero-body{
    text-align: center;
    padding: 30px;
  }
}
</style>
