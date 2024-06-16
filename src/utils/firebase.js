// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-app-425513.firebaseapp.com",
  projectId: "blog-app-425513",
  storageBucket: "blog-app-425513.appspot.com",
  messagingSenderId: "316909882578",
  appId: "1:316909882578:web:6d52a75328638c5c98b10b",
  measurementId: "G-C9GQT4R883"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);