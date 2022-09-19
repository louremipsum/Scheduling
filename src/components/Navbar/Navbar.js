import { Group } from "@mantine/core";
import React from "react";
import Logo from "./Logo.js";
import Navlink from "./Navlink";

function Navbar() {
  return (
    <Group dir="row" m={4} p={4} spacing={5} height={56} mb={120}>
      <Logo />
      <Navlink />
    </Group>
  );
}

export default Navbar;
