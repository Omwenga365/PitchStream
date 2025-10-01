import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import ProtectedRoute from "./utils/ProtectedRoute";

// Minimal placeholder pages
function Home() {
  return <div className="p-6">Home / Live scores placeholder</div>;
}
function MatchDetails() {
  return <div className="p-6">Match Details - placeholder</div>;
}
function Favorites() {
  return <div className="p-6">Favorites (protected)</div>;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/match/:id" element={<MatchDetails />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/favorites"
            element={
              <ProtectedRoute>
                <Favorites />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
