// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from"firebase/auth"
import {getDatabase} from"firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABxpOnRoPT4DVDRXYTEp72hL2pBuz2LQ8",
  authDomain: "iotglovesmart.firebaseapp.com",
  databaseURL: "https://iotglovesmart-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "iotglovesmart",
  storageBucket: "iotglovesmart.appspot.com",
  messagingSenderId: "687544253372",
  appId: "1:687544253372:web:71c0f78b73466f229ac9b9",
  measurementId: "G-011C13GTX1"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
const analytics = getAnalytics(FIREBASE_APP);
export const Auth=getAuth(FIREBASE_APP);
export const db=getDatabase(FIREBASE_APP);