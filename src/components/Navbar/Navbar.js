import { createStyles, Group } from "@mantine/core";
import React from "react";
import Logo from "./Logo.js";
import Navlink from "./Navlink";
import Log from "./Log";

function Navbar() {
  const useStyles = createStyles((_params) => ({
    nav: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      background: "rgba(255, 255, 255, 0.8)",
      backdropFilter: "saturate(180%) blur(10px)",
    },
  }));

  const { classes } = useStyles();
  return (
    <Group dir="row" m={0} p={8} mb={120} className={classes.nav}>
      <Logo />
      <Navlink />
      <Log />
    </Group>
  );
}

export default Navbar;
