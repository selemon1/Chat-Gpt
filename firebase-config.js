// Add this configuration to your JavaScript code
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqZvoC0OnzvizDdptoHB5d0k5jObfGeyg",
  authDomain: "chat-gpt-60564.firebaseapp.com",
  projectId: "chat-gpt-60564",
  storageBucket: "chat-gpt-60564.appspot.com",
  messagingSenderId: "64079453425",
  appId: "1:64079453425:web:bf28db6333945c1d11dd50",
  measurementId: "G-WB03PY0V56"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firstProjectDB = firebase.database().ref("new-chat-gpt");
// const analytics = getAnalytics(app);
// // Initialize Firestore
// const db = getFirestore();

// // Initialize Authentication
// const auth = getAuth();

