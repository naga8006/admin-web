// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "nr-admin-f3a84.firebaseapp.com",
  projectId: "nr-admin-f3a84",
  storageBucket: "nr-admin-f3a84.appspot.com",
  messagingSenderId: "395559792052",
  appId: "1:395559792052:web:a0bcf53baace124d5056e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);