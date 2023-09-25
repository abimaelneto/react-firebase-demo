// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHH59oiLfT-hnF_Qntt4thzo48b1I27L8",
  authDomain: "react-firebase-demo-b936d.firebaseapp.com",
  projectId: "react-firebase-demo-b936d",
  storageBucket: "react-firebase-demo-b936d.appspot.com",
  messagingSenderId: "12255540826",
  appId: "1:12255540826:web:70418bc9e06c2657174a63",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
