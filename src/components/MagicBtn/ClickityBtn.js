import React from "react";
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
  //   setOpened(!opened, 5000);
  return (
    <div>
      {count === 0 ? (
        <Button
          variant="solid"
          m="2.5rem 5rem"
          size="md"
          onClick={handlers.increment}
        >
          Go Ahead
        </Button>
      ) : (
        <Tooltip label={clickTxt[count]} withArrow>
          <Button
            variant="solid"
            m="2.5rem 5rem"
            size="md"
            onClick={handlers.increment}
          >
            Go Ahead
          </Button>
        </Tooltip>
      )}
    </div>
  );
}

export default ClickityBtn;
