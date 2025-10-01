import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import ProtectedRoute from "./utils/ProtectedRoute";
import Home from "./components/Home"; // optional, if you create a separate file
import MatchDetails from "./components/MatchDetails";
import Favorites from "./components/Favorites";

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
