// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-ecom-40a7d.firebaseapp.com",
  projectId: "mern-ecom-40a7d",
  storageBucket: "mern-ecom-40a7d.appspot.com",
  messagingSenderId: "1054166295588",
  appId: "1:1054166295588:web:a3c840572af816e9c1a4b1",
  measurementId: "G-Y4D7Y6KJPE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);