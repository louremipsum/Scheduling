import React from "react";
import { createStyles, Group, Text } from "@mantine/core";
import { ReactComponent as YourSvg } from "./logoimg.svg";

function Logo(c) {
  const { classes } = useStyles({ c });

  return (
    <Group justify="space-around" align="center" dir="row">
      <YourSvg />
      <Text
        component="span"
        align="center"
        variant="gradient"
        className={classes.txt}
        size="xl"
        weight={700}
        style={{ fontFamily: "Greycliff CF, sans-serif" }}
      >
        Lourem Ipsum
      </Text>
    </Group>
  );
}

export default Logo;

const useStyles = createStyles((theme, { c }) => ({
  txt: {
    background: `-webkit-linear-gradient(${theme.colors.primary[c.c1]}, ${
      theme.colors.primary[c.c2]
    })`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
}));
