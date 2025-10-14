import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MatchesList() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadMatches() {
      try {
        const res = await fetch("https://api.football-data.org/v4/matches", {
          headers: { "X-Auth-Token": "ccd71791f0e348d8bb124648e6b1eaed" },
        });

        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        const data = await res.json();
        setMatches(data.matches || []);
      } catch (err) {
        console.error("Error fetching matches:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadMatches();
  }, []);

  if (loading) return <div className="p-6">Loading matches...</div>;
  if (error) return <div className="p-6 text-red-500">Error: {error}</div>;
  if (!matches.length) return <div className="p-6">No matches found.</div>;

  return (
    <div className="p-6 space-y-4">
      {matches.map((match) => (
        <div key={match.id} className="p-4 border rounded">
          <p className="font-bold">
            {match.homeTeam?.name} vs {match.awayTeam?.name}
          </p>
          <p>Date: {new Date(match.utcDate).toLocaleString()}</p>
          <Link
            to={`/match/${match.id}`}
            className="text-blue-500 hover:underline"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}
