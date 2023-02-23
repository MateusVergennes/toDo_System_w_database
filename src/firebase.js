// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLWaYMEUGGqCEiALsLGLjYWCDQjAdk4K4",
  authDomain: "todo-app-90155.firebaseapp.com",
  projectId: "todo-app-90155",
  storageBucket: "todo-app-90155.appspot.com",
  messagingSenderId: "931172620868",
  appId: "1:931172620868:web:2ed8604d05d0533077fa11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)