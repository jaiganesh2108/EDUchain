import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

function App() {
  return (

    <Router>
      <Routes>
        {/* Landing page route */}
        <Route path="/" element={<Home />} />

        {/* Dashboard page route (shown after connecting wallet) */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
