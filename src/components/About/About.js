import { Stack, Text } from "@mantine/core";
import React from "react";

function About() {
  return (
    <Stack>
      <Text weight={800} size={32}>
        Smthing is brewing here
      </Text>
      <Text italic>Come back later for a surprise...</Text>
    </Stack>
  );
}

export default About;
