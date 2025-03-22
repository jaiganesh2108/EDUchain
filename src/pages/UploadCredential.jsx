import React, { useState } from "react";

export default function UploadCredential() {
  // State to store the selected file
  const [file, setFile] = useState(null);

  // Handle file upload logic
  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file.");
      return;
    }

    // Prepare file data to send to backend (or IPFS)
    const formData = new FormData();
    formData.append("file", file);

    try {
      alert("File uploaded Successfully(mock)");
    } catch (error) {
      alert("Upload failed");
    }
  };

  return (
    <div>
      <h2>Upload Credential</h2>

      {/* File input */}
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        style={{ marginBottom: "10px" }}
      />
      <br />

      {/* Upload button */}
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
