import {
  Autocomplete,
  Button,
  CopyButton,
  createStyles,
  Paper,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import React, { useState } from "react";
import { HiAnnotation } from "react-icons/hi";

function Section2() {
  const [value, setValue] = useState("");
  //   const data = value.trim().length > 0 ? value : [];

  const useStyles = createStyles(() => ({
    box: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0.5rem",
      margin: "1rem",
    },
  }));

  const { classes } = useStyles();

  return (
    <div className={classes.box}>
      <Stack>
        <Text>We offer many cool services like...</Text>
        <TextInput
          placeholder="Type anything..."
          size="md"
          radius="md"
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
          icon={<HiAnnotation />}
          //   data={data}
        />
        <Paper shadow="sm" p="md">
          {value}
        </Paper>
        <CopyButton value={value}>
          {({ copied, copy }) => (
            <Button color={copied ? "indigo" : "violet"} onClick={copy}>
              {copied ? "Copied Text" : "Copy Text"}
            </Button>
          )}
        </CopyButton>
      </Stack>
    </div>
  );
}

export default Section2;
