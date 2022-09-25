import React from "react";
import { Group, Text } from "@mantine/core";
import { ReactComponent as YourSvg } from "./logoimg.svg";

function Logo() {
  return (
    <Group justify="space-around" align="center" dir="row">
      <YourSvg />
      <Text
        component="span"
        align="center"
        variant="gradient"
        gradient={{ from: "#261821", to: "#8C5A61", deg: 45 }}
        size="xl"
        weight={700}
        style={{ fontFamily: "Greycliff CF, sans-serif" }}
      >
        Lourem Ipsum
      </Text>
    </Group>
  );
}

export default Logo;
