// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJ2Le-dteq69Ya38i5F5yYGYUXrqYYjno",
  authDomain: "dimpumessage.firebaseapp.com",
  projectId: "dimpumessage",
  storageBucket: "dimpumessage.firebasestorage.app",
  messagingSenderId: "905607727536",
  appId: "1:905607727536:web:3073cd47c5bb39be7bee75",
  measurementId: "G-TMVJJ4LDHY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);