import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "pitchstream-57981.firebaseapp.com",
  projectId: "pitchstream-57981",
  storageBucket: "pitchstream-57981.appspot.com",
  messagingSenderId: "285842313865",
  appId: "1:285842313865:web:234b695cbc124bfc432c58",
  measurementId: "G-NV86JK9T7X"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
