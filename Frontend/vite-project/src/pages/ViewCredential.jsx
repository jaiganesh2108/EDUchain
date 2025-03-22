import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/ViewCredential.css"; // Make sure your CSS file uses these class names

// Variants define how our container and items animate when they appear
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, when: "beforeChildren" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ViewCredential() {
  // This state stores the list of credentials that have been verified and submitted
  const [credentials, setCredentials] = useState([]);

  // This state manages the input values for the form
  const [formData, setFormData] = useState({
    studentName: "",
    issuedDate: "",
    walletId: "",
    course: "",
  });

  // This state holds any verification error message, such as "No match found!"
  const [verificationMessage, setVerificationMessage] = useState("");

  // Updates our form data when the user types into an input field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Dummy function to verify a credential. In a real app, this might query a database or blockchain.
  const verifyCredential = (credential) => {
    // Here is a dummy "valid" credential for demonstration purposes
    const validCredential = {
      studentName: "Alice",
      issuedDate: "2023-04-01",
      walletId: "ABC123",
      course: "B.Sc Computer Science",
    };

    // Check if every field in the submitted credential matches the valid one
    return (
      credential.name === validCredential.studentName &&
      credential.issued === validCredential.issuedDate &&
      credential.walletId === validCredential.walletId &&
      credential.course === validCredential.course
    );
  };

  // Handles form submission: verifies the credential and either adds it to the list or shows an error
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new credential object with a unique ID based on the current time
    const newCredential = {
      id: Date.now(),
      name: formData.studentName,
      issued: formData.issuedDate,
      walletId: formData.walletId,
      course: formData.course,
    };

    // Verify the new credential using our dummy function
    if (verifyCredential(newCredential)) {
      // If verification passes, add the credential to our list and clear any error message
      setCredentials([...credentials, newCredential]);
      setVerificationMessage("");
      // Reset the form fields for a fresh entry
      setFormData({
        studentName: "",
        issuedDate: "",
        walletId: "",
        course: "",
      });
    } else {
      // If verification fails, show an error message
      setVerificationMessage("No match found!");
    }
  };

  return (
    // Motion.div animates the container using the defined containerVariants
    <motion.div
      className="view-credential-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Title for the verification form */}
      <motion.h2 className="section-title" variants={itemVariants}>
        Verify Credential
      </motion.h2>

      {/* The form for submitting new credentials */}
      <motion.form
        className="credential-form"
        onSubmit={handleSubmit}
        variants={itemVariants}
      >
        {/* Student Name Input */}
        <div className="form-group">
          <label htmlFor="studentName">Student Name</label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            placeholder="Enter student name"
            value={formData.studentName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Certificate Issued Date Input */}
        <div className="form-group">
          <label htmlFor="issuedDate">Certificate Issued Date</label>
          <input
            type="date"
            id="issuedDate"
            name="issuedDate"
            value={formData.issuedDate}
            onChange={handleChange}
            required
          />
        </div>

        {/* Wallet ID Input */}
        <div className="form-group">
          <label htmlFor="walletId">Hash ID</label>
          <input
            type="text"
            id="walletId"
            name="walletId"
            placeholder="Enter wallet ID"
            value={formData.walletId}
            onChange={handleChange}
            required
          />
        </div>

        {/* Student Course Input */}
        <div className="form-group">
          <label htmlFor="course">Student Course</label>
          <input
            type="text"
            id="course"
            name="course"
            placeholder="Enter course name"
            value={formData.course}
            onChange={handleChange}
            required
          />
        </div>

        {/* Animated submit button with hover and tap effects */}
        <motion.button
          type="submit"
          className="submit-button"
          whileHover={{ scale: 1.05, boxShadow: "0 6px 14px rgba(0,0,0,0.25)" }}
          whileTap={{ scale: 0.95 }}
          variants={itemVariants}
        >
          Submit Credential
        </motion.button>
      </motion.form>

      {/* Display verification error message if there is one */}
      <AnimatePresence>
        {verificationMessage && (
          <motion.p
            className="verification-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {verificationMessage}
          </motion.p>
        )}
      </AnimatePresence>

      {/* Title for the list of submitted credentials */}
      <motion.h2 className="section-title" variants={itemVariants}>
        Submitted Credentials
      </motion.h2>

      {/* Animate the appearance of credential cards */}
      <div className="credentials-list">
        <AnimatePresence>
          {credentials.length > 0 ? (
            credentials.map((cred) => (
              <motion.div
                key={cred.id}
                className="credential-card"
                variants={itemVariants}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <p>
                  <strong>Name:</strong> {cred.name}
                </p>
                <p>
                  <strong>Issued:</strong> {cred.issued}
                </p>
                <p>
                  <strong>Wallet ID:</strong> {cred.walletId}
                </p>
                <p>
                  <strong>Course:</strong> {cred.course}
                </p>
              </motion.div>
            ))
          ) : (
            <motion.p
              className="no-credentials"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              No credentials submitted yet.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
