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
        src="https://user-images.githubusercontent.com/72456774/192101787-06378f1a-84e0-4439-a9ac-6276b533df46.jpg"
        className={classes.bg}
      >
        <Navbar />
        <Landing />
      </BackgroundImage>
    </Group>
  );
}

export default Face;
