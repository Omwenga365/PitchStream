import { db } from "../firebase";
import { doc, setDoc, deleteDoc, getDocs, collection } from "firebase/firestore";

export async function addFavorite(uid, match) {
  const favRef = doc(db, "users", uid, "favorites", match.matchId);
  await setDoc(favRef, match);
}

export async function removeFavorite(uid, matchId) {
  const favRef = doc(db, "users", uid, "favorites", matchId);
  await deleteDoc(favRef);
}

export async function getFavorites(uid) {
  const favsRef = collection(db, "users", uid, "favorites");
  const snapshot = await getDocs(favsRef);
  return snapshot.docs.map((doc) => doc.data());
}
