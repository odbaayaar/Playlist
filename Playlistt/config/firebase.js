// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpixxXmnANZYjMlirkHSEHnIfQoZ1XbsU",
  authDomain: "playlist-mock-43428.firebaseapp.com",
  projectId: "playlist-mock-43428",
  storageBucket: "playlist-mock-43428.appspot.com",
  messagingSenderId: "899558069553",
  appId: "1:899558069553:web:2cc2e5287b354ccb7acc10",
  measurementId: "G-RZC05VNNS1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);