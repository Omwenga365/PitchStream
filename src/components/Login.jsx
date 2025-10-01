import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate(from, { replace: true }); // go back to where user came from
    } catch (err) {
      console.error("Google sign-in error:", err);
    }
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h2 className="text-xl mb-4">Login</h2>
      <button
        onClick={handleGoogleLogin}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Login with Google
      </button>
    </div>
  );
}

