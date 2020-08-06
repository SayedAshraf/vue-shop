import firebase from "firebase";

require("firebase/firestore");

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDRRhmHdKttWN--vhGfpChtKG7QpDh2_ug",
  authDomain: "vue-shop-5544b.firebaseapp.com",
  databaseURL: "https://vue-shop-5544b.firebaseio.com",
  projectId: "vue-shop-5544b",
  storageBucket: "vue-shop-5544b.appspot.com",
  messagingSenderId: "738505397934",
  appId: "1:738505397934:web:266ee62ca7152b8f773f3f",
  measurementId: "G-T0ZYM74R3Z",
};


//Initialize db refrence to database and fb refrence to Firebase
const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { fb, db };



