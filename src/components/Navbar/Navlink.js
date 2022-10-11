import React from "react";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

function Navlink() {
  const links = [
    {
      title: "About",
      rel: "about/",
    },
    {
      title: "Contact",
      rel: "contact/",
    },
    {
      title: "Lab",
      rel: "experiments/",
    },
  ];

  const UID = () => Math.random().toString(36).substring(2, 9);

  return (
    <Button.Group>
      {links.map((item) => (
        <Button component={Link} to={item.rel} key={UID()} variant="subtle">
          {item.title}
        </Button>
      ))}
    </Button.Group>
  );
}

export default Navlink;
