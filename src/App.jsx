// import { useState } from 'react'
import Header from "./components/Hero/hero.jsx";
import Nav from "./components/Nav/nav";
// import Project from './components/Project/project'
import Footer from "./components/Footer/footer";
/* import {Outlet} from 'react-router-dom' */
import AboutMe from "./pages/About/aboutMe.jsx";
import Portfolio from "./pages/Portfolio/portfolio.jsx";
import Contact from "./pages/Contact/contact.jsx";
import Resume from "./pages/Resume/resume.jsx";

import "./App.css";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box>
      <Nav />
      <Box id="layout">
        {/* <Box id="hero-Box">
          <Hero />
        </Box> */}
        <Box id="about-div" 
  /* _hover={{ bg: "red.500" }}
  transition="backgrounds"
  transitionTimingFunction="ease-in-out" */>
          <AboutMe />
        </Box>
        <Box id="portfolio-div">
          <Portfolio />
        </Box>
        {/* <Box id="contact-Box">
          <Contact />
        </Box> */}
        <Box id="resume-div">
          <Resume />
        </Box>
        <Box id="footer-div">
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
