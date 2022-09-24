import { Button, createStyles, Text } from "@mantine/core";
import React from "react";

function Landing() {
  const useStyles = createStyles((theme) => ({
    main: {
      margin: "14rem 5rem 0 5rem",
      fontFamily: "Greycliff CF, sans-serif",
      align: "center",
      color: theme.white,
      weight: "700",
      fontSize: "3.5rem",
    },
    sub: {
      margin: "0 5rem",
      fontFamily: "Greycliff CF, sans-serif",
      align: "center",
      color: theme.white,
      weight: "400",
      fontSize: "2rem",
    },
  }));
  const { classes } = useStyles();
  return (
    <div>
      <Text className={classes.main}>Uhh, Can all the mikes stand up?</Text>
      <Text className={classes.sub}>That concludes the mic check.</Text>
      <Button variant="solid" m="2.5rem 5rem" size="md">
        Go Ahead
      </Button>
    </div>
  );
}

export default Landing;
