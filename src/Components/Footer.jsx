import React from "react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  const footerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff",
    position: "fixed",
    left: 0,
    right: 0,
    bottom: 0,
  };

  const textWithIconStyle = {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  };

  const iconStyle = {
    color: "red",
  };

  return (
    <footer style={footerStyle}>
      <div style={textWithIconStyle}>
        <span>Made with</span>
        <FaHeart style={iconStyle} />
        <span>by Shubha</span>
      </div>
    </footer>
  );
};

export default Footer;
