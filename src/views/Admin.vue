<template>
  <div class="admin">
    <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
      <a id="show-sidebar" @click="closeMenu" class="btn btn-sm btn-dark" href="#">
        <i class="fas fa-bars"></i>
      </a>
      <nav id="sidebar" class="sidebar-wrapper">
        <div class="sidebar-content">
          <!-- sidebar-brand  -->
          <div class="sidebar-item sidebar-brand">
            <a href="#">Vue Shop</a>
            <div id="close-sidebar" @click="closeMenu">
              <i class="fas fa-times"></i>
            </div>
          </div>
          <!-- sidebar-header  -->
          <div class="sidebar-all">
            <div class="sidebar-item sidebar-header row">
              <div class="user-pic col-md-12" >
                <img class="adminImg img-responsive img-rounded col-md-6" :src="photoUrl" alt="User picture"/>
              </div>
              <div class="user-info col-md-12">
                <span class="user-name" v-if="name">{{name}}</span>
                <span class="user-name" v-else>Admin Store</span>
                <span>{{email}}</span>
                <span class="user-role"></span>
                <span class="user-status">
                  <i class="fa fa-circle"></i>
                  <span>Online</span>
                </span>
              </div>
            </div>
          </div>
          <!-- sidebar-search  -->
          <div class="sidebar-item sidebar-search">
            <div>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control search-menu"
                  placeholder="Search..."
                />
                <div class="input-group-append">
                  <span class="input-group-text">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!-- sidebar-menu  -->
          <div class="container sidebar-item sidebar-menu admin-menu">
            <ul class="row">
              <li class="header-menu col-md-12 text-left">
                <span>Menu</span>
              </li>
              <li>
                <router-link to="/admin/overview">
                  <i class="fa fa-chart-line"></i>
                  <span>Overview</span>
                </router-link>
              </li>

              <li>
                <router-link to="/admin/products">
                  <i class="fab fa-amazon"></i>
                  <span>Products</span>
                </router-link>
              </li>

              <li>
                <router-link to="/admin/orders">
                  <i class="fa fa-shopping-cart"></i>
                  <span>Orders</span>
                </router-link>
              </li>

              <li>
                <router-link to="/admin/profile">
                  <i class="fa fa-user"></i>
                  <span>Profile</span>
                </router-link>
              </li>

              <li>
                <a href="#" @click="logOut">
                  <i class="fa fa-power-off"></i>
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
          <!-- sidebar-menu  -->
        </div>
      </nav>
      <!-- page-content" -->
      <main class="page-content">
        <router-view />
      </main>
    </div>
    <!-- page-wrapper -->
  </div>
</template>

<script>
// @ is an alias to /src
import $ from "jquery";
import {fb ,db} from "../firebase.js";

export default {
  name: "admin",
  data() {
    return {
      name:null,
      email:null,
      uid:null,
      photoUrl: null,
    };
  },
  methods: {
    //Function that toggle the menu bar
    closeMenu() {
      $(".page-wrapper").toggleClass("toggled");
    },
    //log out function 
    logOut(){
      fb.auth().signOut()
      .then(()=>{
        this.$router.replace('/');
        Toast.fire({
          icon: "success",
          title: "LogOut Successfully",
        });
      })
      .catch(()=>{
        console.log('err');
      })
    },
  },
  //when website created it get user informations
  created(){
    const user = fb.auth().currentUser;
    this.email = user.email;
    //Get the name of User
    db.collection("profiles").doc(user.uid).get().then((doc)=> {
        if (doc.exists){
          this.name = doc.data().name;
          this.photoUrl = doc.data().photoUrl;
        } else {
          console.log("No such document!")
        }}).catch(function(error) {
          console.log("Error getting document:", error)
    });
  }
};
</script>

<style>
  .admin-menu{
    padding: 5px 5px;
    display: flex;
    justify-content: center;
    align-content: center;
  }.adminImg{
    border-radius: 50%;
  }
</style>
