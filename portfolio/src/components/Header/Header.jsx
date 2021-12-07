import React, { useState } from "react";
import Navigation from "portfolio/src/components/navigation/navigation.jsx";
import AboutMe from '../aboutMe/aboutMe';
import ContactMe from '../contactMe/contactMe';
import PreviousWork from '../previousExperience/previousExperience';
import Projects from '../projects/project';

function Portfolio() {
  // state of current page
  const [currentPage, handlePageChange] = useState("AboutMe");

  const renderPage = () => {
    // switch statement that will return the appropriate component of the 'currentPage'
    switch (currentPage) {
      case "AboutMe":
        return <AboutMe></AboutMe>;
      case "contactMe":
        return <ContactMe></ContactMe>;
      case "work":
        return <PreviousWork></PreviousWork>;
      // case "resume":
      // return <Resume></Resume>
      case "projects":
          return <Projects></Projects>
      default:
        return <AboutMe></AboutMe>;
    }
  };

  return (
    <div>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <div>
        {
          // Render the component returned by 'renderPage()'
          renderPage()
        }
      </div>
    </div>
  );
}

export default Portfolio;