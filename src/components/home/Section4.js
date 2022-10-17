import { createStyles } from "@mantine/core";
import React from "react";
import Cardobj from "./Cardobj";
import { RiGithubFill, RiTwitterFill } from "react-icons/ri";

function Section4() {
  const { classes } = useStyles();
  const data = [
    {
      title: "Vanilla Component",
      src: "https://user-images.githubusercontent.com/72456774/193331949-e58c8d43-b6d1-4d77-915b-6b6b3ee2329d.png",
      heading: "Vanilla Components",
      Badge: "project",
      para: "A website I made in the begining of my days of learning HTML, CSS and trying to clone the ChakraUI Components by using pure CSS and HTML ofcourse without heavy JS capability",
      btnTxt: "Website",
      btnHref: "https://vanillacomponents.netlify.app/",
      iconProp: "</>",
      btnColor: "",
    },
    {
      title: "Github",
      src: "",
      heading: "Github",
      Badge: "personal",
      para: "Here is my personal GitHub profile where you can check out what im working on these day",
      btnTxt: "GitHub",
      btnHref: "https://github.com/louremipsum",
      iconProp: <RiGithubFill width={16} height={16} />,
      btnColor: "#171515",
    },
    {
      title: "Twitter",
      src: "",
      heading: "Twitter",
      Badge: "work",
      para: "This is my Twitter pfp which I occasionally use for documentation purposes and what new is happening in my work life",
      btnTxt: "Twitter",
      btnHref: "https://twitter.com/louremipsum",
      iconProp: <RiTwitterFill width={16} height={16} />,
      btnColor: "#00acee",
    },
  ];
  const UID = () => Math.random().toString(36).substring(2, 9);

  return (
    <div className={classes.main}>
      {data.map((item) => (
        <Cardobj {...item} key={UID()} />
      ))}
    </div>
  );
}

export default Section4;

const useStyles = createStyles(() => ({
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "0.5rem",
    margin: "1rem",
  },
}));
