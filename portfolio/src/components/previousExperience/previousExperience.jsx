// Imports 
import './previousExperience.css'
import { Chrono } from "react-chrono";

import {Container} from 'react-bootstrap'

// React Funtion

function previousWork () {
    const items = [{
        title: "2021",
        cardTitle: "University of Denver",
        cardSubtitle:"Bootcamp Certificate",
        cardDetailedText: "An intensive 24-week long boot camp dedicated to Full-Stack. Skills learned consist of HTML5, CSS, JavaScript, Bootstrap, jQuery, User-Centric Design Research, Visual Prototyping & Wireframing, User Interface Development.",
      }, 
      {
        title: "2019 - 2021",
        cardTitle: "Workforce Management Analyst",
        cardSubtitle:"ezCater",
        cardDetailedText: "..........",
          
      },
      {
        title: "2018 - 2019",
        cardTitle: "Customer Service Representative",
        cardSubtitle:"ezCater",
        cardDetailedText: "Problem solved in order to answer catering partner and customer inquiries and resolve any concerns.",
          
      },
      {
        title: "2014 - 2018",
        cardTitle: "Univeristy of Colorado, Boulder",
        cardSubtitle:"B.A.",
        cardDetailedText: "Graduated with a bachelor's degree in Political Science with a minor in English Literature.",
          
      },
    ];


    return (
       <Container>
        <div>
            <h1> Previous Work History</h1>
        <div style={{ width: "70%", height: "100%"  }}>
        <Chrono items={items} 
       mode= "VERTICAL_ALTERNATING"
        theme={{ 
            primary: "black",
            secondary: "lightgrey",
            cardBgColor: "lightgrey",
            cardForeColor: "black",
            titleColor: "black"
          }}> 
          <div className="chrono-icons">
            <img
               src="https://img.icons8.com/ios-filled/90/000000/student-female.png"
              alt="graduation cap"
            />
            <img
             src="https://img.icons8.com/ios-filled/30/000000/briefcase.png"
              alt="breifcase"
            />
            <img
               src="https://img.icons8.com/ios-filled/30/000000/briefcase.png"
               alt="breifcase"
            />
            <img
              src="https://img.icons8.com/ios-filled/90/000000/student-female.png"
              alt="graduation cap"
            />
          </div>
          </Chrono>
      </div>
      </div>
      </Container> 


    )
}


export default previousWork