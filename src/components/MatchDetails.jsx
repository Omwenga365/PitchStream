import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { addFavorite } from "../utils/firestoreHelpers";

const sampleMatches = [
  { id: "001", homeTeam: "Team A", awayTeam: "Team B", date: "2025-10-01" },
  { id: "002", homeTeam: "Team C", awayTeam: "Team D", date: "2025-10-02" },
  // Add more sample matches if needed
];

export default function MatchDetails() {
  const { user } = useAuth();
  const [selectedMatch, setSelectedMatch] = useState(sampleMatches[0]);

  const handleSelect = (e) => {
    const match = sampleMatches.find((m) => m.id === e.target.value);
    setSelectedMatch(match);
  };

  const handleAddFavorite = async () => {
    if (!user) return alert("Please log in first.");
    await addFavorite(user.uid, selectedMatch);
    alert("Added to favorites!");
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">
        {selectedMatch.homeTeam} vs {selectedMatch.awayTeam}
      </h1>
      <p className="text-gray-600 mb-4 text-center">Date: {selectedMatch.date}</p>

      <label className="block mb-2 font-semibold" htmlFor="matchSelect">
        Select Match:
      </label>
      <select
        id="matchSelect"
        className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={handleSelect}
        value={selectedMatch.id}
      >
        {sampleMatches.map((m) => (
          <option key={m.id} value={m.id}>
            {m.homeTeam} vs {m.awayTeam} ({m.date})
          </option>
        ))}
      </select>

      <button
        className="w-full mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded shadow"
        onClick={handleAddFavorite}
      >
        Add to Favorites
      </button>
    </div>
  );
}
