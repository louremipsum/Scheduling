import { createStyles, Slider, Text } from "@mantine/core";
import React, { useState } from "react";

function Section3() {
  const [currentSize, setSize] = useState(50);
  const SIZE = [
    { value: 0, label: "xs" },
    { value: 25, label: "sm" },
    { value: 50, label: "md" },
    { value: 75, label: "lg" },
    { value: 100, label: "xl" },
  ];

  const useStyles = createStyles((theme) => ({
    main: {
      display: "flex",
      flexDirection: "column",
      padding: "0.5rem",
      margin: "1rem",

      justifyContent: "center",
      alignItems: "center",
    },
    slider: {
      padding: "0.5rem",
      margin: "1rem",
      color: theme.primaryColor[5],
      width: "50%",
    },
  }));

  const { classes } = useStyles();
  return (
    <div className={classes.main}>
      <Text size={currentSize} weight={400}>
        Cool Things Like This
      </Text>
      <Slider
        label={(val) => SIZE.find((mark) => mark.value === val).label}
        step={25}
        marks={SIZE}
        styles={{ markLabel: { display: "none" } }}
        value={currentSize}
        onChange={setSize}
        className={classes.slider}
      />
    </div>
  );
}

export default Section3;
