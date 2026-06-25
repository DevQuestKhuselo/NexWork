// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBOzQph-eQVJKMi3FxSDrFy5lJl9CA5cc",
  authDomain: "nexwork-75444.firebaseapp.com",
  projectId: "nexwork-75444",
  storageBucket: "nexwork-75444.firebasestorage.app",
  messagingSenderId: "1002028282021",
  appId: "1:1002028282021:web:074c7b4951ffa5cbbe1d4c",
  measurementId: "G-J36075X44W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);