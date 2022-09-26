import React from "react";
import { Grid, Text, Image } from "@mantine/core";

function Section1() {
  return (
    <Grid>
      <Grid.Col>
        <Text>So... Why this website?</Text>
        <Text>
          This website is mainly my imagination running free to learn the recent
          thing which i came to know about that is <Text>Mantine</Text>
        </Text>
      </Grid.Col>
      <Grid.Col>
        <Image></Image>
      </Grid.Col>
    </Grid>
  );
}

export default Section1;
