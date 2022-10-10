import React from "react";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

function navlink() {
  return (
    <Button.Group>
      <Button component={Link} to="/Smth" variant="subtle">
        About
      </Button>
      <Button variant="subtle">Contact</Button>
    </Button.Group>
  );
}

export default navlink;
