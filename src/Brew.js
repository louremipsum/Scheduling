import React from "react";
import { createStyles, Stack, Text } from "@mantine/core";

function Brew() {
  const { classes } = useStyles();

  return (
    <>
      <Stack align={"center"} m="lg" p={"lg"}>
        <div className={classes.gify}>
          <iframe
            src="https://gifer.com/embed/75xZ"
            width="100%"
            height="100%"
            frameBorder="0"
            className={classes.frame}
            title="Rest here Soldier"
          ></iframe>
        </div>
        <Text weight={800} size={32}>
          Something is brewing here
        </Text>
        <Text italic>Come back later for a surprise...</Text>
      </Stack>
    </>
  );
}

export default Brew;

const useStyles = createStyles(() => ({
  gify: {
    // paddingTop: "50.000%",
  },
  frame: {
    // position: "absolute",
    // top: 0,
    // left: 0,
  },
}));
