import React, { useEffect, useState } from "react";

export default function ViewCredential() {
  // State to store list of credentials
  const [credentials, setCredentials] = useState([]);

  // useEffect runs once when the component loads
  useEffect(() => {
    // For now, we're setting dummy data
    setCredentials([
      {
        id: 1,
        name: "B.Sc Computer Science",   // Degree name
        cid: "Qm123abc...",              // Content Identifier for IPFS
        issued: "2023",                  // Year it was issued
      },
    ]);
  }, []);

  return (
    <div>
      <h2>📑 My Credentials</h2>

      {/* Loop through each credential and display it */}
      {credentials.map((cred) => (
        <div key={cred.id} className="credential-card">
          <p><strong>Name:</strong> {cred.name}</p>
          <p><strong>Issued:</strong> {cred.issued}</p>
          <p>
            <strong>Link:</strong>{" "}
            <a 
              href={`https://ipfs.io/ipfs/${cred.cid}`} 
              target="_blank" 
              rel="noreferrer"
            >
              View Document
            </a>
          </p>
        </div>
      ))}
    </div>
  );
}
