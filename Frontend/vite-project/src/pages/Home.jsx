import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  const navigate = useNavigate();

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        console.log("Wallet connected:", accounts[0]);

        navigate("/dashboard");
      } catch (err) {
        console.error("Connection rejected by user:", err);
      }
    } else {
      alert("MetaMask not detected! Please install MetaMask extension.");
    }
  };

  return (
    <div className="home-container">
      {/* Top bar with the Connect Wallet button */}
      <div className="top-bar">
        <button className="connect-btn" onClick={connectWallet}>
          Connect Wallet
        </button>
      </div>

      {/* Centered welcome message and instructions */}
      <div className="center-content">
        <h1>🔐 Welcome to EduChain</h1>
        <p>Please connect your wallet to access your credentials.</p>
      </div>
    </div>
  );
}
