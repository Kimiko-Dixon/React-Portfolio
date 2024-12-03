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
      variant="outline"
      shadow="-5px 10px"
      _hover={{ scale: "105%" }}
      transition="scale"
      transitionTimingFunction="ease-in-out"
      onMouseEnter={() => onHover(project.name)}
      onMouseLeave={() => onHover("")}
      className="project-card"
    >
      <Image
        className="project-img"
        src={project.img}
        alt={project.name}
        p={2}
      />
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
              className="git-logo"
              name="logo-github"
            ></ion-icon>
          </Link>
        </Card.Title>
        <Card.Description fontSize='1.25rem'>
          {project.type}
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
}
