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
  HiTrash,
} from "react-icons/hi";
import getContrastGradient from "../specialFunc/YIQ";

function Section2() {
  const [currentText, setText] = useState("");
  const [currentColor1, setColor1] = useState("#FFFFFF");
  const [currentColor2, setColor2] = useState("#FFFFFF");
  //   const data = value.trim().length > 0 ? value : [];
  const textColor = getContrastGradient(currentColor1, currentColor2);

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
      background: `linear-gradient(90deg, ${currentColor1} 34%, ${currentColor2} 81%);`,
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
            <Tooltip
              label={currentText === "" ? "Empty" : "Delete"}
              withArrow
              position="right"
            >
              <ActionIcon
                color={currentText === "" ? "gray" : "violet"}
                onClick={function empty() {
                  setText("");
                }}
              >
                <HiTrash size={20} />
              </ActionIcon>
            </Tooltip>
          </Paper>
        </Stack>
      </div>
      {/* ----------------------------------------------- */}
      <div className={classes.color}>
        <Text mb={8} size="md" weight="500" color={textColor}>
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
