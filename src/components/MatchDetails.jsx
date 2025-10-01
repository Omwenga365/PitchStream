import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { addFavorite } from "../utils/firestoreHelpers";

export default function MatchDetails() {
  const { user } = useAuth();
  const match = { id: "001", homeTeam: "Team A", awayTeam: "Team B", date: "2025-10-01" };

  const handleAddFavorite = async () => {
    if (!user) return alert("Please log in first.");
    await addFavorite(user.uid, match);
    alert("Added to favorites!");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">
        {match.homeTeam} vs {match.awayTeam}
      </h1>
      <p>Date: {match.date}</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleAddFavorite}
      >
        Add to Favorites
      </button>
    </div>
  );
}
