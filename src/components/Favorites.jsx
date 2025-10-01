import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { getFavorites } from "../utils/firestoreHelpers";

export default function Favorites() {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      getFavorites(user.uid).then((favs) => {
        setFavorites(favs);
        setLoading(false);
      });
    } else {
      setFavorites([]);
      setLoading(false);
    }
  }, [user]);

  if (loading) {
    return <div className="p-6">Loading favorites...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Your Favorites</h1>
      {!user ? (
        <p>Please log in to see your favorites.</p>
      ) : favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <ul className="space-y-2">
          {favorites.map((fav, index) => (
            <li key={index} className="p-2 border rounded">
              {fav.homeTeam} vs {fav.awayTeam}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
