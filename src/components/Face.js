import { BackgroundImage, createStyles, Group } from "@mantine/core";
import React from "react";
// import { AiOutlineGoogle } from "react-icons/ai";
import Navbar from "./Navbar/Navbar.js";
import Landing from "./Navbar/Landing.js";

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
    <Group>
      <BackgroundImage
        src="https://user-images.githubusercontent.com/72456774/192104661-20f08b78-a648-4cde-a65e-89e1436ccb4a.png"
        className={classes.bg}
      >
        <Navbar />
        <Landing />
      </BackgroundImage>
    </Group>
  );
}

export default Face;
