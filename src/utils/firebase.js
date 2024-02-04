// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAG7uj2D9ib94W6-FMAwEEyJNViNlfztSE",
  authDomain: "netflixgpt-f3182.firebaseapp.com",
  projectId: "netflixgpt-f3182",
  storageBucket: "netflixgpt-f3182.appspot.com",
  messagingSenderId: "124485313932",
  appId: "1:124485313932:web:b3da96a5b5c80f2252a2a9",
  measurementId: "G-RK7F1EC6XW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();