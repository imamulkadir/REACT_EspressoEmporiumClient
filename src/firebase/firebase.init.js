// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe13Yso44KAZbPJQ626UGvEwMg3SJZ2sE",
  authDomain: "espressoemporium-109cc.firebaseapp.com",
  projectId: "espressoemporium-109cc",
  storageBucket: "espressoemporium-109cc.firebasestorage.app",
  messagingSenderId: "1023484070583",
  appId: "1:1023484070583:web:6092f0d699551b91d05b32",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
