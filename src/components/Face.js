import { BackgroundImage, createStyles } from "@mantine/core";
import React, { useState } from "react";
import Navbar from "./Navbar/Navbar.js";
import Landing from "./Landing.js";
import Section1 from "./home/Section1";
import Section2 from "./home/Section2.js";
import Section3 from "./home/Section3.js";
import Section4 from "./home/Section4.js";
import Footer from "./Footer/Footer.js";
import ScrollTop from "./MagicBtn/ScrollTop.js";

function Face() {
  const [isLoading, setisLoaded] = useState(false);
  const { classes } = useStyles();
  return (
    <div className={classes.main}>
      <Navbar />
      {/* <BackgroundImage
        className={classes.thumb}
        style={{
          visibility: isLoading ? "hidden" : "visible",
          display: isLoading ? "none" : "block",
        }}
        src="https://user-images.githubusercontent.com/72456774/192104661-20f08b78-a648-4cde-a65e-89e1436ccb4a.png"
      >
        <Landing />
      </BackgroundImage> */}
      <BackgroundImage
        onLoad={() => setisLoaded(true)}
        style={{ opacity: isLoading ? 1 : 0 }}
        src="https://user-images.githubusercontent.com/72456774/192104661-20f08b78-a648-4cde-a65e-89e1436ccb4a.png"
        className={classes.bg}
      >
        <Landing />
      </BackgroundImage>

      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default Face;

const useStyles = createStyles(() => ({
  bg: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    transition: "opacity 400ms ease 0ms",
  },
  thumb: {
    filter: "blur(20px)",
    transform: "scale(1.1)",
    transition: "visibility 0ms ease 400ms",
  },
  full: {
    transition: "opacity 400ms ease 0ms",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    margin: 0,
  },
}));
