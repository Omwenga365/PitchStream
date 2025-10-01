import React from "react";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const { user, loading } = useAuth();

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      // successful sign-in will be handled by onAuthStateChanged in the AuthProvider
    } catch (err) {
      console.error("Google sign-in error:", err);
      alert("Sign in failed — check console");
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      alert("Signed out");
    } catch (err) {
      console.error("Sign out error:", err);
    }
  };

  if (loading) return <div className="p-6">Checking login...</div>;

  if (user)
    return (
      <div className="p-6 flex flex-col items-center">
        <img
          src={user.photoURL}
          alt="avatar"
          className="w-20 h-20 rounded-full mb-3"
        />
        <div className="font-semibold mb-2">Hello, {user.displayName}</div>
        <div className="text-sm text-gray-600 mb-4">{user.email}</div>
        <button
          onClick={handleSignOut}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Sign out
        </button>
      </div>
    );

  return (
    <div className="p-6 flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Sign in to PitchStream</h2>
      <button
        onClick={loginWithGoogle}
        className="px-5 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
      >
        Sign in with Google
      </button>
    </div>
  );
}
