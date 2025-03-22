import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  const navigate = useNavigate();

  // Function to connect MetaMask wallet
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        console.log("Wallet connected:", accounts[0]);
        navigate("/dashboard"); // Navigate to Dashboard after successful connection

      } catch (err) {
        console.error("Connection rejected by user:", err);
      }
    } else {
      alert("MetaMask not detected! Please install MetaMask extension.");
    }
  };

  return (
    <div className="home-container">
      <h1>🔐 Welcome to EduChain</h1>
      <p>Please connect your wallet to access your credentials.</p>

      <button className="connect-btn" onClick={connectWallet}>
        Connect MetaMask
      </button>
    </div>
  );
}
