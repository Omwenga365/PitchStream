// src/utils/firestoreHelpers.js
import { db } from "../firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

// Add a match to the user's favorites
export async function addFavorite(userId, match) {
  const colRef = collection(db, "favorites");
  await addDoc(colRef, { ...match, uid: userId, createdAt: new Date() });
}

// Get all favorites for a user
export async function getFavorites(userId) {
  const colRef = collection(db, "favorites");
  const q = query(colRef, where("uid", "==", userId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ matchId: doc.id, ...doc.data() }));
}
