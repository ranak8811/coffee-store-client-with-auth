// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG_JZuXzXT3lb6JJHoMkD03wT714nl5b8",
  authDomain: "coffee-store-e30be.firebaseapp.com",
  projectId: "coffee-store-e30be",
  storageBucket: "coffee-store-e30be.firebasestorage.app",
  messagingSenderId: "318248053741",
  appId: "1:318248053741:web:cbdde6ec0bc266ae64d5e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
