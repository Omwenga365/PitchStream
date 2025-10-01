// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase config (fixed storageBucket)
const firebaseConfig = {
  apiKey: "AIzaSyCvflOSgjLrDHAx_XDGLZYxWw4DmYlVwqw",
  authDomain: "pitchstream-57981.firebaseapp.com",
  projectId: "pitchstream-57981",
  storageBucket: "pitchstream-57981.appspot.com", // <-- fixed
  messagingSenderId: "285842313865",
  appId: "1:285842313865:web:234b695cbc124bfc432c58",
  measurementId: "G-NV86JK9T7X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
