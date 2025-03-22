import React, { useState } from "react";

// Importing child components
import ViewCredential from "./ViewCredential";
import UploadCredential from "./UploadCredential";

// Importing custom CSS styles
import "../styles/Dashboard.css";

export default function Dashboard() {
  // This state controls which tab is currently active: "view" or "upload"
  const [tab, setTab] = useState("view");

  return (
    <div className="dashboard-container">
      <h1>🎓 EduChain Dashboard</h1>

      {/* Tab Buttons to switch between View and Upload */}
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

      {/* Conditional rendering based on selected tab */}
      <div className="tab-content">
        {tab === "view" ? <ViewCredential /> : <UploadCredential />}
      </div>
    </div>
  );
}
