// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "0",
  authDomain: "todo-app-0.firebaseapp.com",
  projectId: "todo-app-0",
  storageBucket: "todo-app-0.appspot.com",
  messagingSenderId: "0",
  appId: "1:0:web:0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)