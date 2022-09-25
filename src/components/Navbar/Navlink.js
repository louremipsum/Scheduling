import React from "react";
import { Button } from "@mantine/core";

function navlink() {
  return (
    <Button.Group>
      <Button variant="subtle">About</Button>
      <Button variant="subtle">Contact</Button>
    </Button.Group>
  );
}

export default navlink;
