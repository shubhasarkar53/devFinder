import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { searchQueryAtom } from "../Store/Atoms/search-query-atom";
import DisplayUser from "./DisplayUser";

let clock;

const MainApp = () => {
  const [searchTerm, setSearchTerm] = useRecoilState(searchQueryAtom);
  const [dearchTerm, setDSearchTerm] = useState("");

  const mainAppStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
    color: "#fff",
    textAlign: "center",
    padding: "20px",

  };

  const inputStyle = {
    padding: "10px 25px",
    width: "300px",
    fontSize: "16px",
    borderRadius: "25px",
    border: "1px solid #ddd",
    marginBottom: "20px",
  };

  const taglineStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "30px",
  };

  function searchUser(developerUsername) {
    // console.log("searching user");
    setSearchTerm(developerUsername);
  }

  function debouneddearchTerm(e) {
    clearTimeout(clock);
    setDSearchTerm(e.target.value);
    clock = setTimeout(() => {
      //main funtion to call
      searchUser(e.target.value);
    }, 1000);
  }

  return (
    <div style={mainAppStyle}>
      <div style={taglineStyle}>Find Your Developer in a Snap!</div>
      <input
        type="text"
        placeholder="Search a developer using GitHub ID"
        value={dearchTerm}
        onChange={debouneddearchTerm}
        style={inputStyle}
      />
    </div>
  );
};

export default MainApp;
