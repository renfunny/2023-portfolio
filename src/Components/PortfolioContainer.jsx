import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";
import Footer from "./Footer";
import Projects from "./Pages/Projects";

export default function PortfolioContainer() {
  // const [currentPage, setCurrentPage] = useState("Home");

  // const renderPage = () => {
  //   if (currentPage === "Home") {
  //     return <Home />;
  //   }
  //   if (currentPage === "Projects") {
  //     return <Projects />;
  //   }
  //   if (currentPage === "About") {
  //     return <About />;
  //   }
  //   if (currentPage === "Contact") {
  //     return <Contact />;
  //   }
  //   return <Resume />;
  // };

  // const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="wrapper">
      <NavTabs />
      {/* {renderPage()} */}
      <Footer />
    </div>
  );
}
