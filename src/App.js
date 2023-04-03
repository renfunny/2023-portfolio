import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import PortfolioContainer from "./Components/PortfolioContainer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PortfolioContainer />} />
      </Routes>
    </>
  );
}

export default App;
