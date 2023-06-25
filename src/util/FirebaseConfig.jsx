// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// needed for google authentication
import {getAuth, GoogleAuthProvider} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGZMavL14xLpJ7jWnfe2jlEU6l1bYuIDo",
  authDomain: "weac-62c04.firebaseapp.com",
  projectId: "weac-62c04",
  storageBucket: "weac-62c04.appspot.com",
  messagingSenderId: "977316875713",
  appId: "1:977316875713:web:69d0f9e3c8b9a78259b340",
  measurementId: "G-4J79GB1YEK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(); 
export {auth, provider};