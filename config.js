import firebase from "firebase";
require("@firebase/firestore");

//Pega tu configuración de firebase aquí
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdEn_5TbTGN149EOPXc2WBHtH-uEuvxus",
  authDomain: "bici4-21a9f.firebaseapp.com",
  projectId: "bici4-21a9f",
  storageBucket: "bici4-21a9f.appspot.com",
  messagingSenderId: "502923477602",
  appId: "1:502923477602:web:dc3298d588592ba831473b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


