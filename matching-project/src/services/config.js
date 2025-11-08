// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVNwVEQ2ACnuxPOzTSlX5vw1khHh8x2uY",
  authDomain: "gether-matching-app.firebaseapp.com",
  databaseURL: "https://gether-matching-app-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gether-matching-app",
  storageBucket: "gether-matching-app.firebasestorage.app",
  messagingSenderId: "929792073649",
  appId: "1:929792073649:web:7d0325de3e007cf86e2790",
  measurementId: "G-ELMG04K7GW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);