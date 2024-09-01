
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAG7uj2D9ib94W6-FMAwEEyJNViNlfztSE",
  authDomain: "netflixgpt-f3182.firebaseapp.com",
  projectId: "netflixgpt-f3182",
  storageBucket: "netflixgpt-f3182.appspot.com",
  messagingSenderId: "124485313932",
  appId: "1:124485313932:web:b3da96a5b5c80f2252a2a9",
  measurementId: "G-RK7F1EC6XW"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();