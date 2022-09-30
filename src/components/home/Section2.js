import {
  ActionIcon,
  ColorInput,
  CopyButton,
  createStyles,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Tooltip,
} from "@mantine/core";
import React, { useState } from "react";
import {
  HiAnnotation,
  HiClipboardCopy,
  HiClipboardCheck,
} from "react-icons/hi";

function Section2() {
  const [currentText, setText] = useState("");
  const [currentColor1, setColor1] = useState("");
  const [currentColor2, setColor2] = useState("");
  //   const data = value.trim().length > 0 ? value : [];

  const useStyles = createStyles(() => ({
    box: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1rem",
      margin: "1rem",
      width: "22rem",
      borderRadius: "8px",
    },
    dis: {
      maxWidth: "20rem",
    },
    disPaper: {
      maxWidth: "20rem",
      wordWrap: "break-word",
      borderRadius: "8px",
    },
    main: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      padding: "0.5rem",
      margin: "2rem",
    },
    color: {
      /*       display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row", */
      padding: "1rem",
      margin: "1rem",
      width: "22rem",
      borderRadius: "8px",
      background:
        "linear-gradient(90deg, rgba(103,255,192,1) 34%, rgba(144,152,228,1) 81%);",
    },
  }));

  const { classes } = useStyles();

  return (
    <SimpleGrid cols={2} className={classes.main}>
      <div className={classes.box}>
        <Stack>
          <Text mb={8} size="md" weight="500">
            We offer many cool services like...
          </Text>
          <TextInput
            placeholder="Type anything..."
            size="md"
            radius="md"
            value={currentText}
            onChange={(event) => setText(event.currentTarget.value)}
            icon={<HiAnnotation />}
            className={classes.dis}
            maxLength={256}
            //   data={data}
          />
          <Paper shadow="sm" p="md" withBorder className={classes.disPaper}>
            {currentText}
            <CopyButton value={currentText} timeout={2000}>
              {({ copied, copy }) => (
                <Tooltip
                  label={copied ? "Copied Text" : "Copy Text"}
                  withArrow
                  position="right"
                >
                  <ActionIcon
                    color={copied ? "indigo" : "violet"}
                    onClick={copy}
                    className={classes.action}
                  >
                    {copied ? (
                      <HiClipboardCheck size={20} />
                    ) : (
                      <HiClipboardCopy size={20} />
                    )}
                  </ActionIcon>
                </Tooltip>
              )}
            </CopyButton>
          </Paper>
        </Stack>
      </div>
      <div className={classes.color}>
        <Text mb={8} size="md" weight="500">
          Also, can you tell me about your favourite color?
        </Text>
        <ColorInput
          placeholder="Pick color 1"
          value={currentColor1}
          onChange={setColor1}
          mb={8}
        />
        <ColorInput
          placeholder="Pick color 2"
          value={currentColor2}
          onChange={setColor2}
          mb={8}
        />
      </div>
    </SimpleGrid>
  );
}

export default Section2;
