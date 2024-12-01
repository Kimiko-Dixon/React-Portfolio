import "./project.css";
import PropTypes from "prop-types";
import { Card, Image, Text, Link } from "@chakra-ui/react";

Project.propTypes = {
  project: PropTypes.object,
  onHover: PropTypes.func,
  target: PropTypes.string,
  onHoverLink: PropTypes.func,
  targetLink: PropTypes.string,
};

export default function Project({
  project,
  onHover,
  target,
  onHoverLink,
  targetLink,
}) {
  return (
    <Card.Root
      /* className="project-card" */ variant="outline"
      shadow="-5px 10px"
      _hover={{ scale: "105%" }}
      transition="scale"
      transitionTimingFunction="ease-in-out"
      onMouseEnter={() => onHover(project.name)}
      onMouseLeave={() => onHover("")}
      className="project-card"/* {
        target === project.name ? "project-card hover" : "project-card"
      } */
    >
      {/* <div
        onMouseEnter={() => onHover(project.name)}
        onMouseLeave={() => onHover("")}
        className={target === project.name ? "hover" : null}
      > */}
      <Image
        className="project-img"
        src={project.img}
        alt={project.name}
        p={2}
        /* borderRadius='var(--chakra-radii-l3)' */
      />
      {/* {target === project.name ? ( */}
      {/* <div className="project-links">
            <a
              href={project.deployed}
              target="_blank"
              onMouseEnter={() => onHoverLink("deployed")}
              onMouseLeave={() => onHoverLink("")}
              className={
                targetLink === "deployed"
                  ? "deployed hoverLink"
                  : "deployed noHoverLink"
              }
            >
              Deployed Application 
            </a>
            
          </div> */}
      {/* ) : null} */}
      {/* </div> */}
      <Card.Body>
        <Card.Title display='flex' alignItems='center'>
          <Link
            href={project.deployed}
            target="_blank"
            onMouseEnter={target === project.name ? () => onHoverLink("deployed") : null}
            onMouseLeave={target === project.name ? () => onHoverLink(""): null}
            className={
              targetLink === "deployed" && target === project.name
                ? "deployed hoverLink"
                : "deployed noHoverLink"
            }
          >
            {project.name}
          </Link>
          <Link
            href={project.repo}
            target="_blank"
            onMouseEnter={target === project.name ? () => onHoverLink("repo") : null}
            onMouseLeave={target === project.name ? () => onHoverLink("") : null}
            className={
              targetLink === "repo" && target === project.name ? "repo hoverLink" : "repo noHoverLink"
            }
            display='flex' justifyContent='center' alignItems='center'
          >
            <ion-icon
              /* size="large" */ className="git-logo"
              name="logo-github"
            ></ion-icon>
          </Link>
        </Card.Title>
        <Card.Description>
          {project.type}
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
  /* return (
           <div id='project-div'>
                <div id='project-box'>
                < div onMouseEnter={() => onHover(project.name)} onMouseLeave={() => onHover('')} className={target ===  project.name ? ('imgDiv hover') : ('imgDiv') }>
                <img className= "project-img" src={project.img} alt={project.name}/>
                {target === project.name ? 
                (<div className='project-links'>
                    <a 
                        href={project.deployed}
                        target='_blank' 
                        onMouseEnter={() => onHoverLink('deployed')} 
                        onMouseLeave={() => onHoverLink('')} 
                        className={targetLink ===  'deployed' ? ('deployed hoverLink') : ('deployed noHoverLink')}
                    >
                        {project.name}
                    </a>
                    <a 
                        href={project.repo} 
                        target='_blank'
                        onMouseEnter={() => onHoverLink('repo')} 
                        onMouseLeave={() => onHoverLink('')} 
                        className={targetLink ===  'repo' ? ('repo hoverLink') : ('repo noHoverLink')}
                    >
                        <ion-icon name="logo-github"></ion-icon>
                    </a>
                    </div>
                ) : null}
            </div>
                </div>
                
            </div>
        ) */
}
