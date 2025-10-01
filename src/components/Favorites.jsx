import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { getFavorites } from "../utils/firestoreHelpers";

export default function Favorites() {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (user) {
      getFavorites(user.uid).then(setFavorites);
    }
  }, [user]);

  if (!user) return <p className="p-6">Please log in to see your favorites.</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Your Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <ul className="space-y-2">
          {favorites.map((fav) => (
            <li key={fav.matchId} className="p-2 border rounded">
              {fav.homeTeam} vs {fav.awayTeam}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
