import { Stack, Text } from "@mantine/core";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function About() {
  return (
    <Stack>
      {/* <Text weight={800} size={32}>
        Smthing is brewing here
      </Text>
      <Text italic>Come back later for a surprise...</Text> */}
      <Navbar />
      <Text>Hi, I'm Vinayak aka Louremipsum</Text>
      <Text>
        I'm a UI/UX designer and Frontend Developer who loves making products
        accessable to all and learning new things and coding in general with a
        love for problem solving and pattern spotting.
      </Text>
      <Footer />
    </Stack>
  );
}

export default About;
