import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const { user, loginWithGoogle, logout } = useAuth();

  return (
    <nav className="flex items-center justify-between bg-gray-900 text-white px-6 py-3 shadow">
      {/* Left side: links */}
      <div className="flex gap-4">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/favorites" className="hover:text-blue-400">Favorites</Link>
      </div>

      {/* Right side: auth controls */}
      <div className="flex items-center gap-4">
        {user ? (
          <>
            {/* Avatar + email */}
            <div className="flex items-center gap-2">
              {user.photoURL && (
                <img
                  src={user.photoURL}
                  alt="avatar"
                  className="w-8 h-8 rounded-full border border-gray-700"
                />
              )}
              <span className="text-sm">{user.displayName || user.email}</span>
            </div>
            <button
              onClick={logout}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={loginWithGoogle}
            className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600"
          >
            Login with Google
          </button>
        )}
      </div>
    </nav>
  );
}
