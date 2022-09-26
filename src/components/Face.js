import { BackgroundImage, createStyles, Grid, Group } from "@mantine/core";
import React from "react";
import Navbar from "./Navbar/Navbar.js";
import Landing from "./Navbar/Landing.js";
import Section1 from "./home/Section1";

function Face() {
  const useStyles = createStyles((_params) => ({
    bg: {
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      // height: "100vh",
    },
  }));

  const { classes } = useStyles();
  return (
    <>
      <Grid>
        <Grid.Col>
          <BackgroundImage
            src="https://user-images.githubusercontent.com/72456774/192104661-20f08b78-a648-4cde-a65e-89e1436ccb4a.png"
            className={classes.bg}
          >
            <Navbar />
            <Landing />
          </BackgroundImage>
        </Grid.Col>
        <Grid.Col>{/* <Section1 /> */}</Grid.Col>
      </Grid>
    </>
  );
}

export default Face;
