<template>
  <div class="overview">
    <Navbar />
    <div class="container header">
      <div class="intro">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-6">
            <h3>About Page</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati, tenetur? Laboriosam neque optio saepe natus quaerat,
              placeat in voluptatum ea iste excepturi nulla fuga sint quisquam
              iusto error voluptas velit.
            </p>
          </div>
          <div class="col-md-6">
            <img
              src="../assets/img/svg/overview.svg"
              alt="overview img"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "about",
};
</script>
<style lang="scss" scoped>
.header {
  padding-top: 50px;
}
</style>
