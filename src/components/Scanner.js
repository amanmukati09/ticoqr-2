import React, { useState, useEffect } from "react";
import QrReader from "react-qr-scanner";
import navbar_img from "../images/navbar.png";

const Scanner = () => {
  const [delay, setDelay] = useState(100);
  const [showScanner, setShowScanner] = useState(false);
  const [menu, setMenu] = useState(null);

  const handleScan = (data) => {
    if (data) {
      // Handle the scanned data here
      setShowScanner(false); // Hide the scanner
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "calc(100vh - 80px)", // Adjusted for footer height
    padding: "20px", // Add padding for spacing
  };

  const previewStyle = {
    width: "100%", // Make the QR scanner responsive
    maxWidth: "320px", // Set a max width for the scanner
    border: "2px solid #000", // Add a border
  };

  const menuStyle = {
    margin: "20px 0", // Add margin at the top and bottom
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    textAlign: "center",
  };

  const buttonStyle = {
    margin: "20px",
    padding: "10px 20px",
    border: "1px solid #000",
    cursor: "pointer",
    backgroundColor: "#333",
    color: "#fff",
    borderRadius: "4px",
  };

  const toggleScanner = () => {
    setShowScanner(!showScanner);
  };

  return (
    <div style={containerStyle}>
      {showScanner ? (
        <QrReader delay={delay} style={previewStyle} onError={handleError} onScan={handleScan} />
      ) : menu !== null ? (
        <div style={menuStyle}>{menu}</div>
      ) : (
        <img src={navbar_img} alt="QR Code" style={{ maxWidth: "100%", maxHeight: "50vh" }} />
      )}
      <button style={buttonStyle} onClick={toggleScanner}>
        {showScanner ? "Stop" : "Scan"}
      </button>
    </div>
  );
};

export default Scanner;
