import { Button, Link, List, ListItem } from "@chakra-ui/react";
import "./nav.css";

/* import { Link,useLocation } from 'react-router-dom' */

export default function Nav() {
  /* const onPage = useLocation().pathname */
  return (
    <nav>
      <List.Root
        id="top-nav"
        display="flex"
        flexDirection="row"
        justifyContent="flex-end"
        alignItems="center"
        p="3vh 2em 3vh 0"
      >
        <ListItem>
          <Button
            _hover={{ scale: "110%" }}
            transition="scale"
            transitionTimingFunction="ease-in-out"
            shadow="-5px 10px"
            variant="subtle"
          >
            <Link href="#about">About Me</Link>
          </Button>
        </ListItem>
        <ListItem>
          <Button _hover={{ scale: "110%" }}
            transition="scale"
            transitionTimingFunction="ease-in-out"
            shadow="-5px 10px"
            variant="subtle">
            <Link href="#portfolio">Portfolio</Link>
          </Button>
        </ListItem>
        {/* <li><a href='#contact'>Contact</a></li> */}
        <ListItem>
          <Button _hover={{ scale: "110%" }}
            transition="scale"
            transitionTimingFunction="ease-in-out"
            shadow="-5px 10px"
            variant="subtle">
            <Link href="#resume">Resume</Link>
          </Button>
        </ListItem>
      </List.Root>
    </nav>
  );
}
