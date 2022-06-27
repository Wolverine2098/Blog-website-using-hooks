import firebase from 'firebase/app';
import 'firebase/firestore';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
const firebaseConfig = {
  apiKey: "AIzaSyCgraDp7iyYWW4MrRYM4QoOXji3Zp1BOHA",
  authDomain: "react-hooks-blog-5136f.firebaseapp.com",
  projectId: "react-hooks-blog-5136f",
  storageBucket: "react-hooks-blog-5136f.appspot.com",
  messagingSenderId: "767995400684",
  appId: "1:767995400684:web:1d101ef7c78c82dae770c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
