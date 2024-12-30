import { useState } from "react";

import "./App.css";
import Navbar from "./Components/Navbar";
import MainApp from "./Components/MainApp";
import Footer from "./Components/Footer";
import { RecoilRoot } from "recoil";
import DisplayUser from "./Components/DisplayUser";

function App() {
  return (
    <>
      <RecoilRoot>
        <Navbar />
        <MainApp />
        <DisplayUser />
        <Footer />
      </RecoilRoot>
    </>
  );
}

export default App;
