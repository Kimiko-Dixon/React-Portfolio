import {
  Grid,
  GridItem,
  Heading,
  List,
  Link,
  Box
} from "@chakra-ui/react";
import { LuCheckCircle } from "react-icons/lu";
import "./resume.css";

export default function Resume() {
  return (
    <Box id="resume" /* display='flex'  flexDir='column'  alignItems='center'  */>
      <Grid
        templateColumns="repeat(3, 1fr)"
        /* gap={30} */
        justifyContent="center"
        alignItems="center"
      >
        <Heading  size='3xl' display="flex" flexDirection="column" alignItems="center">
          Download
          <Link
            href="https://drive.google.com/uc?export=download&id=1Kzzcnlwv0wcLyEN-k2EptAJUeYcuIYsq"
            download
            _hover={{ textDecoration: "underline" }}
            transition="textDecoration"
            transitionTimingFunction="ease-in-out"
          >
            Resume
          </Link>
        </Heading>
        <GridItem colSpan={2} /* width='min-content' */>
          <List.Root /*display='flex'  flexDir='column'  alignItems='center'*/>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              <List.Item>
                <List.Indicator asChild color="green.500">
                  <LuCheckCircle />
                </List.Indicator>
                JavaScript
              </List.Item>
              <List.Item>
                <List.Indicator asChild color="green.500">
                  <LuCheckCircle />
                </List.Indicator>
                Express
              </List.Item>
              <List.Item>
                <List.Indicator asChild color="green.500">
                  <LuCheckCircle />
                </List.Indicator>
                Node
              </List.Item>
              <List.Item>
                <List.Indicator asChild color="green.500">
                  <LuCheckCircle />
                </List.Indicator>
                APIs
              </List.Item>
              <List.Item>
                <List.Indicator asChild color="green.500">
                  <LuCheckCircle />
                </List.Indicator>
                PostSQL/Sequelize
              </List.Item>
              <List.Item>
                <List.Indicator asChild color="green.500">
                  <LuCheckCircle />
                </List.Indicator>
                MongoDB/Mongoose
              </List.Item>
              <List.Item>
                <List.Indicator asChild color="green.500">
                  <LuCheckCircle />
                </List.Indicator>
                REST
              </List.Item>
            </Grid>
          </List.Root>
        </GridItem>
        {/*<div className="proficiencies">
           <h3>Proficiencies</h3> */}

        {/* </div> */}
      </Grid>
    </Box>
  );
}
