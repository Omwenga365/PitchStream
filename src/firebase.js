// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvflOSgjLrDHAx_XDGLZYxWw4DmYlVwqw",
  authDomain: "pitchstream-57981.firebaseapp.com",
  projectId: "pitchstream-57981",
  storageBucket: "pitchstream-57981.appspot.com", // ✅ fixed here
  messagingSenderId: "285842313865",
  appId: "1:285842313865:web:234b695cbc124bfc432c58",
  measurementId: "G-NV86JK9T7X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Firebase services
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

export default app;
