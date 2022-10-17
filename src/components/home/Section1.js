import React from "react";
import {
  Text,
  createStyles,
  SimpleGrid,
  Stack,
  Highlight,
  Mark,
} from "@mantine/core";

function Section1() {
  const { classes } = useStyles();

  return (
    <SimpleGrid cols={1}>
      <div className={classes.head}>
        <Stack>
          <Text size="xl" weight="700" align="center">
            So... Why this website?
          </Text>
          <Text size="lg" weight="500" align="center">
            This website is mainly my <Mark color={"teal"}>imagination</Mark>{" "}
            running free to learn the recent thing which i came to know about
            that is{" "}
            <Highlight
              variant="link"
              component="a"
              href="https://mantine.dev"
              highlight={"Mantine"}
            >
              Mantine
            </Highlight>
          </Text>
        </Stack>
      </div>
      {/* <div>
        <Image></Image>
      </div> */}
    </SimpleGrid>
  );
}

export default Section1;

const useStyles = createStyles(() => ({
  head: {
    display: "flex",
    justifyContent: "space-around",
    padding: "1.5rem",
    margin: "2rem",
    alignItems: "center",
  },
}));
