// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKWPnZUZoqjIqhWSAN0XYfYWtASpnAWkI",
  authDomain: "balance-help.firebaseapp.com",
  projectId: "balance-help",
  storageBucket: "balance-help.appspot.com",
  messagingSenderId: "988796257530",
  appId: "1:988796257530:web:8f3ff0f15bfe9c19ab7543",
  measurementId: "G-1GTZYZ4482"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);