import firebase from "firebase";
require("firebase/firestore");

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCOovktwXhefqkWhvPjlv2aUKgijGRsFW8",
    authDomain: "onlinesh0p.firebaseapp.com",
    databaseURL: "https://onlinesh0p.firebaseio.com",
    projectId: "onlinesh0p",
    storageBucket: "onlinesh0p.appspot.com",
    messagingSenderId: "800773710659",
    appId: "1:800773710659:web:1a177f379c024961b2c5f6",
    measurementId: "G-E6EBTFMNNL"
  };


//Initialize db refrence to database and fb refrence to Firebase
const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { fb, db };



