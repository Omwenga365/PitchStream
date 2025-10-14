import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { addFavorite } from "../utils/firestoreHelpers";

export default function MatchDetails() {
  const { id } = useParams();
  const { user } = useAuth();
  const [match, setMatch] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.football-data.org/v4/matches/${id}`, {
      headers: { "X-Auth-Token": "ccd71791f0e348d8bb124648e6b1eaed" },
    })
      .then((res) => res.json())
      .then((data) => {
        setMatch(data.match || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching match details:", err);
        setLoading(false);
      });
  }, [id]);

  const handleAddFavorite = async () => {
    if (!user) return alert("Please log in first.");
    if (match) {
      await addFavorite(user.uid, {
        id: match.id,
        homeTeam: match.homeTeam?.name,
        awayTeam: match.awayTeam?.name,
        date: match.utcDate,
      });
      alert("Added to favorites!");
    }
  };

  if (loading) return <div className="p-6">Loading match details...</div>;
  if (!match) return <div className="p-6">Match not found.</div>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">
        {match.homeTeam?.name} vs {match.awayTeam?.name}
      </h1>
      <p>Date: {new Date(match.utcDate).toLocaleString()}</p>
      <p>Status: {match.status}</p>
      <p>Competition: {match.competition?.name}</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleAddFavorite}
      >
        Add to Favorites
      </button>
    </div>
  );
}
