import React from "react";
import { Button } from "@mantine/core";

function navlink() {
  return (
    <Button.Group>
      <Button variant="default">About</Button>
      <Button variant="default">Contact</Button>
    </Button.Group>
  );
}

export default navlink;
