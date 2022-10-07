import React, { useEffect, useState } from "react";
import { Tooltip, Button } from "@mantine/core";
import { useCounter } from "@mantine/hooks";

function ClickityBtn() {
  //   const [opened, setOpened] = useState(true);
  const clickTxt = [
    "",
    "Clicked",
    "Double Click",
    "Triple Click",
    "Dominating",
    "Rampage",
    "Mega Click",
    "Unstoppable",
    "Wicked Clicking",
    "Monster Clicking",
    "GODLIKE",
    "BEYOND GODLIKE",
  ];

  const [count, handlers] = useCounter(0, { min: 0, max: clickTxt.length - 1 });
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    if (count > 0) {
      const t = setTimeout(handlers.reset, 1000);
      setTimeoutId(t);
    }

    return () => clearTimeout(timeoutId);
  }, [count, handlers.reset]);

  return (
    <div>
      <Tooltip label={clickTxt[count]} withArrow disabled={count === 0}>
        <Button
          variant="solid"
          m="2.5rem 5rem"
          size="md"
          onClick={handlers.increment}
        >
          Go Ahead
        </Button>
      </Tooltip>
    </div>
  );
}

export default ClickityBtn;
