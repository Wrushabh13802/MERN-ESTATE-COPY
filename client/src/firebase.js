// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-copy.firebaseapp.com",
  projectId: "mern-estate-copy",
  storageBucket: "mern-estate-copy.appspot.com",
  messagingSenderId: "819210672274",
  appId: "1:819210672274:web:9343f125993eb4246f6e4b"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
