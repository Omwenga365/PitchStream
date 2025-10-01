import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          PitchStream
        </Link>

        <div className="flex items-center space-x-4">
          <Link to="/" className="text-sm">Home</Link>
          <Link to="/favorites" className="text-sm">Favorites</Link>
          {user ? (
            <div className="flex items-center space-x-2">
              <img src={user.photoURL} alt="avatar" className="w-8 h-8 rounded-full" />
              <span className="text-sm">{user.displayName}</span>
            </div>
          ) : (
            <Link to="/login" className="text-sm px-3 py-1 border rounded">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
