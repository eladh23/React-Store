import React from "react";

function MyFooter() {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p>&copy; {new Date().getFullYear()} My Store. All Rights Reserved.</p>
        <p>Designed with React</p>
      </div>
    </footer>
  );
}

// Styles
const footerStyle = {
  backgroundColor: "#333",
  color: "white",
  textAlign: "center",
  padding: "20px 0",
  position: "fixed",
  left: "0",
  bottom: "0",
  width: "100%",
};

const containerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
};

export default MyFooter;