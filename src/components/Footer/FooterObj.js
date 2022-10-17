import { Anchor, createStyles } from "@mantine/core";
import React from "react";

function FooterObj(data) {
  const { classes } = useStyles();
  return (
    <Anchor href={data.link} target="_blank" className={classes.main}>
      {data.title}
    </Anchor>
  );
}

export default FooterObj;

const useStyles = createStyles((theme) => ({
  main: {
    color: theme.colors.primary[1],
    margin: "0.5rem",
    fontSize: "16px",
  },
}));
