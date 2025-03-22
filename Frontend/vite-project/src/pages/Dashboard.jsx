import React, { useState } from "react";

// Components
import ViewCredential from "./ViewCredential";
import UploadCredential from "./UploadCredential";
import Navbar from "../components/Navbar";

// Styles
import "../styles/Dashboard.css";

export default function Dashboard() {
  // State to track which tab is active - "view" or "upload"
  const [tab, setTab] = useState("view");

  return (
    <>
      {/* Top Navigation Bar */}
      <Navbar />

      {/* Main Dashboard Section */}
      <div className="dashboard-container">
        <h1>🎓 EduChain Dashboard</h1>

        {/* Tab Switch Buttons */}
        <div className="tab-buttons">
          <button
            className={tab === "view" ? "active" : ""}
            onClick={() => setTab("view")}
          >
            View Credentials
          </button>

          <button
            className={tab === "upload" ? "active" : ""}
            onClick={() => setTab("upload")}
          >
            Upload Credential
          </button>
        </div>

        {/* Render Component Based on Selected Tab */}
        <div className="tab-content">
          {tab === "view" ? <ViewCredential /> : <UploadCredential />}
        </div>
      </div>
    </>
  );
}

