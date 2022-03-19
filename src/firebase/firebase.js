// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//importing
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn7yrqsoBby8vRLqy1aDX5Oju0CTYuC94",
  authDomain: "blog-website-4bdaa.firebaseapp.com",
  projectId: "blog-website-4bdaa",
  storageBucket: "blog-website-4bdaa.appspot.com",
  messagingSenderId: "1064901654253",
  appId: "1:1064901654253:web:1e2f3c0deace684d6e3ee4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export authetication

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// export databse
export const db = getFirestore(app);
