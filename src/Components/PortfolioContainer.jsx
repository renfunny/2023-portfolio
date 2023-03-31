import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Home from "./Pages/Home";
import Background from "./Background";
import Contact from "./Pages/Contact";
import Footer from "./Footer";
import Projects from "./Pages/Projects";
import Technologies from "./Technologies";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return (
        <>
          <Home /> <Technologies />
        </>
      );
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="wrapper">
      <Background />
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
