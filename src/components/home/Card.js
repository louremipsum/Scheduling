import { Anchor, Badge, Button, Card, Group, Text } from "@mantine/core";
import React from "react";

function Section4({ ...data }) {
  return (
    <div>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            height={160}
            alt="Norway"
          />
        </Card.Section>
        <Group position="apart" mt={"md"} mb="xs">
          <Text weight={500}>Generic Heading 1</Text>
          <Badge color={pink} variant="dot">
            Bruh
          </Badge>
        </Group>
        <Text size={sm} color="dimmed">
          <Anchor href="https://github.com/louremipsum" target="_blank">
            Lourem ipsum
          </Anchor>{" "}
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </Text>

        <Button
          variant="solid"
          color="violet"
          fullWidth
          mt={md}
          radius="md"
          component="a"
          href=""
        >
          Ok, lesssgo
        </Button>
      </Card>
    </div>
  );
}

export default Section4;
