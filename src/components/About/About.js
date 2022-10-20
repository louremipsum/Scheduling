import { Blockquote, createStyles, Image, Stack, Text } from "@mantine/core";
import { HiInformationCircle } from "react-icons/hi";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function About() {
  const { classes } = useStyles();

  return (
    <div className={classes.main}>
      <Navbar />
      <Stack align={"center"} mt="lg" className={classes.content}>
        <Image
          src="https://github.com/louremipsum.png"
          m="md"
          alt="Github Pfp"
          withPlaceholder
          width="500"
          height="500"
          className={classes.img}
        />
        <Text>
          Hi, I'm Vinayak aka{" "}
          <Text
            variant="link"
            component="a"
            href="https://github.com/louremipsum"
          >
            Louremipsum
          </Text>
        </Text>
        <Blockquote mt={"lg"} icon={<HiInformationCircle size={24} />}>
          I'm a UI/UX designer and Frontend Developer who loves learning new
          things and coding in general with a passion for problem solving and
          pattern spotting.
        </Blockquote>
      </Stack>
      <Footer />
    </div>
  );
}

export default About;

const useStyles = createStyles(() => ({
  img: {
    padding: "0.5rem",
    margin: "0.5rem",
    border: "2px dashed gray",
    borderRadius: "100%",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    // margin: 0,
  },
  content: {
    flex: 1,
  },
}));
