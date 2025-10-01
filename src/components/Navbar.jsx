import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const { user, loginWithGoogle, logout } = useAuth();

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/favorites" className="hover:underline">Favorites</Link>
      </div>

      <div className="flex items-center space-x-3">
        {user ? (
          <>
            <span className="text-sm">
              {user.displayName || user.email}
            </span>
            {user.photoURL && (
              <img
                src={user.photoURL}
                alt="profile"
                className="w-8 h-8 rounded-full"
              />
            )}
            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={loginWithGoogle}
            className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded"
          >
            Login with Google
          </button>
        )}
      </div>
    </nav>
  );
}
