import React from "react";

import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const navbarStyle = {
    backgroundColor: "#333",
    color: "#fff",
  };

  const logoContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    width: "6%",
  };

  const logoStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  const iconStyle = {
    fontSize: "18px",
    cursor: "pointer",
  };

  return (
    <nav style={navbarStyle}>
      <div style={logoContainerStyle}>
        <div style={logoStyle}>Dev</div>
        <FaSearch style={iconStyle} />
      </div>
    </nav>
  );
};

export default Navbar;
