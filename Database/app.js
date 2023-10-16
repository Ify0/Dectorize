// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATiYB6NYrN9bQqjEh_OyFa6ZAKYsWjdqw",
  authDomain: "database-22885.firebaseapp.com",
  projectId: "database-22885",
  storageBucket: "database-22885.appspot.com",
  messagingSenderId: "607828965374",
  appId: "1:607828965374:web:a12a29156f9920104b32af",
  measurementId: "G-W5ESZGJXJF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
