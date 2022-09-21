import React from "react";
import { Button } from "@mantine/core";

function Log() {
  return (
    <Button.Group>
      <Button variant="primary">Log In</Button>
      <Button variant="outline">Sign up</Button>
    </Button.Group>
  );
}

export default Log;
