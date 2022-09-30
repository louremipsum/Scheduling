import { BackgroundImage, createStyles } from "@mantine/core";
import React from "react";
import Navbar from "./Navbar/Navbar.js";
import Landing from "./Navbar/Landing.js";
import Section1 from "./home/Section1";
import Section2 from "./home/Section2.js";
import Section3 from "./home/Section3.js";
import Section4 from "./home/Section4.js";

function Face() {
  const useStyles = createStyles((_params) => ({
    bg: {
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "100vh",
    },
  }));

  const { classes } = useStyles();
  return (
    <>
      <BackgroundImage
        src="https://user-images.githubusercontent.com/72456774/192104661-20f08b78-a648-4cde-a65e-89e1436ccb4a.png"
        className={classes.bg}
      >
        <Navbar />
        <Landing />
      </BackgroundImage>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  );
}

export default Face;
