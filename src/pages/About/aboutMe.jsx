import headShot from "../../img/profile-photo.jpg";
import './aboutMe.css'
import { Box, Heading, Image,Text } from "@chakra-ui/react"

export default function AboutMe() {
  return (
    <Box id="about">
      <Image  src={headShot} alt="Kimiko Dixon" shadow='-10px 10px' id="head-shot"/>
      <Box className="about-content">
        <Heading size='5xl'>
          Kimiko Dixon
        </Heading>
        <Heading  size='xl' pt='1' pb='5' pl='.1em'>
          Backend Developer
        </Heading>
          <Text pl='.15em'>

            I am a former baker who decided to take the leap into the field of
            Technology. Although I am new to programming, I am eager to learn,
            and with my education via the UCF Bootcamp, I assure that I will be
            quick to pick up new information. I bring to the table the skills of
            great communication, problem-solving, and teamwork as well as a
            detailed oriented mindset.
          </Text>
         </Box> 
      </Box>
  );
}
