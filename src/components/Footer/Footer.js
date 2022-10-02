import { createStyles, Group } from "@mantine/core";
import React from "react";
import Logo from "../Navbar/Logo";
import FooterObj from "./FooterObj";

function Footer() {
  const useStyles = createStyles((theme) => ({
    main: {
      minWidth: "20rem",
      backgroundColor: theme.colors.primary[7],
      padding: "2rem",
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
    <Group position="apart" className={classes.main}>
      <Logo />
      <Group position="right" className={classes.grplink}>
        {datafoot.map((item) => (
          <FooterObj {...item} key={UID()} className={classes.footlink} />
        ))}
        {/* {datafoot.map((item) => (
          <FooterObj {...item} key={UID()} className={classes.footlink} />
        ))} */}
      </Group>
    </Group>
  );
}

export default Footer;
