import Nav from "./components/Nav/nav";
import Footer from "./components/Footer/footer";
import AboutMe from "./pages/About/aboutMe.jsx";
import Portfolio from "./pages/Portfolio/portfolio.jsx";
import Resume from "./pages/Resume/resume.jsx";

import "./App.css";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box>
      <Nav />
      <Box id="layout">
        <Box id="about-div">
          <AboutMe />
        </Box>
        <Box id="portfolio-div">
          <Portfolio />
        </Box>
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
