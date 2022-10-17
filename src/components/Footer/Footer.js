import { createStyles, Group } from "@mantine/core";
import React from "react";
import Logo from "../Navbar/Logo";
import FooterObj from "./FooterObj";

function Footer() {
  const color = {
    c1: 2,
    c2: 5,
  };

  const datafoot = [
    {
      title: "About",
      link: "https://creativeexpresion.netlify.app/",
    },
    {
      title: "Contact",
      link: "https://creativeexpresion.netlify.app/",
    },
  ];

  const UID = () => Math.random().toString(36).substring(2, 9);

  const { classes } = useStyles();

  return (
    <footer>
      <Group position="apart" className={classes.main}>
        <Logo {...color} />
        <Group position="right" className={classes.grplink}>
          {datafoot.map((item) => (
            <FooterObj {...item} key={UID()} className={classes.footlink} />
          ))}
          {/* {datafoot.map((item) => (
          <FooterObj {...item} key={UID()} className={classes.footlink} />
        ))} */}
        </Group>
      </Group>
    </footer>
  );
}

export default Footer;

const useStyles = createStyles((theme) => ({
  main: {
    minWidth: "20rem",
    backgroundColor: theme.colors.primary[8],
    padding: "2.5rem",
    position: "relative",
    bottom: 0,
    width: "100%",
  },
  footlink: {
    margin: "1rem",
    padding: "0.5rem",
  },
  grplink: {
    display: "flex",
    direction: "row",
  },
}));
