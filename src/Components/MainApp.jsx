import React, { useState } from "react";

import { useRecoilState } from "recoil";
import { searchQueryAtom } from "../Store/Atoms/search-query-atom";
import "./mainApp.css";
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



  const smallScreenInputStyle = {
    padding: "10px 25px",
    maxWidth:"200px",
    fontSize: "12px",
    borderRadius: "25px",
    border: "1px solid red",
    marginBottom: "10px",
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
      <div  className="tagline">Find Your Developer in a Snap!</div>
      <input
        type="text"
        placeholder="Search a developer using GitHub ID"
        value={dearchTerm}
        onChange={debouneddearchTerm}
        className="input-field"
      />
    </div>
  );
};

export default MainApp;
