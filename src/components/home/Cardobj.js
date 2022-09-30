import { Anchor, Badge, Button, Card, Group, Text, Image } from "@mantine/core";
import React from "react";

function Cardobj(data) {
  return (
    <div>
      <Card
        shadow="sm"
        p="lg"
        radius="md"
        m="md"
        style={{ maxWidth: "20rem" }}
        withBorder
      >
        <Card.Section>
          <Image src={data.src} height={160} alt={data.title} />
        </Card.Section>
        <Group position="apart" mt={"md"} mb="xs">
          <Text weight={500}>{data.heading}</Text>
          <Badge color={"pink"} variant="dot">
            {data.Badge}
          </Badge>
        </Group>
        <Text size={"sm"} color="dimmed">
          <Anchor href="https://github.com/louremipsum" target="_blank">
            Lourem ipsum
          </Anchor>{" "}
          {data.para}
        </Text>

        <Button
          variant="solid"
          style={{ backgroundColor: data.btnColor }}
          fullWidth
          mt={"md"}
          radius="md"
          component="a"
          href={data.btnHref}
          leftIcon={data.iconProp}
        >
          {data.btnTxt}
        </Button>
      </Card>
    </div>
  );
}

export default Cardobj;
