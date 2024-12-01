import Project from "../../components/Project/project";
import { useState } from "react";
import accessibility from "../../img/accessibility-project.jpg";
import divDest from "../../img/Itinerary.jpg";
import taskBoard from "../../img/Tasks1.jpg";
import weather from "../../img/HistorySearch.jpg";
import noteTaker from "../../img/Notes_Saved.jpg";
import personalBlog from "../../img/BlogPage.jpg";
import { Grid,GridItem, Heading } from "@chakra-ui/react";
import "./portfolio.css";

export default function Portfolio() {
  const projects = [
    {
      name: "Accessibility",
      img: accessibility,
      deployed: "https://kimiko-dixon.github.io/Modual_1_challenge/",
      repo: "https://github.com/Kimiko-Dixon/Modual_1_challenge",
      type:'example'
    },
     /*{
      name: "Devine Destinations",
      img: divDest,
      deployed: "https://joshuamarknanninga.github.io/Divine-Destinations/",
      repo: "https://github.com/joshuamarknanninga/Divine-Destinations",
    },
    {
      name: "Task Board",
      img: taskBoard,
      deployed: "https://kimiko-dixon.github.io/Task_Board/",
      repo: "https://github.com/Kimiko-Dixon/Task_Board",
    },
    {
      name: "Weather Dashboard",
      img: weather,
      deployed: "https://kimiko-dixon.github.io/Weather_Dashboard/",
      repo: "https://github.com/Kimiko-Dixon/Weather_Dashboard",
    },
    {
      name: "Note Taker",
      img: noteTaker,
      deployed: "https://note-taker-xufm.onrender.com/",
      repo: "https://github.com/Kimiko-Dixon/Note_Taker",
    },
    {
      name: "Personal Blog",
      img: personalBlog,
      deployed: "https://kimiko-dixon.github.io/Personal_Blog/",
      repo: "https://github.com/Kimiko-Dixon/Personal_Blog",
    },
    {
      name: "Personal Blog2",
      img: personalBlog,
      deployed: "https://kimiko-dixon.github.io/Personal_Blog/",
      repo: "https://github.com/Kimiko-Dixon/Personal_Blog",
    },
    {
      name: "Personal Blog3",
      img: personalBlog,
      deployed: "https://kimiko-dixon.github.io/Personal_Blog/",
      repo: "https://github.com/Kimiko-Dixon/Personal_Blog",
    },
    {
      name: "Personal Blog4",
      img: personalBlog,
      deployed: "https://kimiko-dixon.github.io/Personal_Blog/",
      repo: "https://github.com/Kimiko-Dixon/Personal_Blog",
    },
    {
      name: "Personal Blog5",
      img: personalBlog,
      deployed: "https://kimiko-dixon.github.io/Personal_Blog/",
      repo: "https://github.com/Kimiko-Dixon/Personal_Blog",
    },
    {
      name: "Personal Blog6",
      img: personalBlog,
      deployed: "https://kimiko-dixon.github.io/Personal_Blog/",
      repo: "https://github.com/Kimiko-Dixon/Personal_Blog",
    }, */
  ];
  const [target, setTarget] = useState("");
  const [targetLink, setTargetLink] = useState("");
  const onHover = (key) => {
    console.log(key);
    setTarget(key);
  };

  const onHoverLink = (key) => {
    console.log(key);
    setTargetLink(key);
  };
  return (
    <div id="portfolio">
      {/* <h2>Portfolio</h2> */}
      <Grid /*gridAutoFlow='columns' {projects.length === 3 ? 'columns' : null}*/   templateColumns={projects.length === 2 ? 'repeat(2,1fr)' : `repeat(3,1fr)`} gap='8' id="projects">
        {projects.length === 1 ? 
        (<>
        <GridItem colSpan={1} display='flex' justifyContent='center' alignItems='center'>
          <Heading size='5xl'>Work</Heading>
        </GridItem>
        <GridItem colSpan={2}>
        {projects.map((project) => (
          <div key={project.name} className="project "/* className="col project" */ /* onMouseEnter={() => onHover(project.name)} onMouseLeave={() => onHover('')} className={target ===  project.name ? ('col imgDiv hover') : ('col imgDiv')  }*/ >
            <Project
              project={project}
              onHover={onHover}
              target={target}
              onHoverLink={onHoverLink}
              targetLink={targetLink}
            />
          </div>
        ))}
        </GridItem>
        </>)
        :
        (projects.map((project) => (
          <div key={project.name} className="project "/* className="col project" */ /* onMouseEnter={() => onHover(project.name)} onMouseLeave={() => onHover('')} className={target ===  project.name ? ('col imgDiv hover') : ('col imgDiv')  }*/ >
            <Project
              project={project}
              onHover={onHover}
              target={target}
              onHoverLink={onHoverLink}
              targetLink={targetLink}
            />
          </div>
        )))}
        
      </Grid>
      
        
      
    </div>
  );
}
