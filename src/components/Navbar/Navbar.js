import { createStyles } from "@mantine/core";
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
      flexDirection: "row",
      marginBottom: "0.5rem",
      padding: "8px",
      position: "sticky",
      top: 0,
      zIndex: 1,
    },
  }));

  const { classes } = useStyles();
  const color = {
    c2: 5,
    c1: 8,
  };

  return (
    <header className={classes.nav}>
      <Logo {...color} />
      <Navlink />
      <Log />
    </header>
  );
}

export default Navbar;
