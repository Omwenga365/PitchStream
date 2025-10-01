import React from "react";
import './App.css'; // <-- This imports Tailwind CSS
import { auth, db, googleProvider } from "./firebase";

function App() {
  console.log("Auth:", auth);
  console.log("DB:", db);
  console.log("Google Provider:", googleProvider);

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold text-blue-600">PitchStream ⚽</h1>
      <p>Firebase is connected successfully 🎉</p>
    </div>
  );
}

export default App;

