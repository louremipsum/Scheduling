import React from "react";
import { Text, createStyles, SimpleGrid, Stack } from "@mantine/core";

function Section1() {
  const useStyles = createStyles(() => ({
    head: {
      display: "flex",
      justifyContent: "space-around",
      padding: "1.5rem",
      margin: "2rem",
      alignItems: "center",
    },
  }));

  const { classes } = useStyles();

  return (
    <SimpleGrid cols={1}>
      <div className={classes.head}>
        <Stack>
          <Text size="lg" weight="700" align="center">
            So... Why this website?
          </Text>
          <Text size="md" weight="500" align="center">
            This website is mainly my imagination running free to learn the
            recent thing which i came to know about that is{" "}
            <Text variant="link" component="a" href="https://mantine.dev">
              Mantine
            </Text>
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
