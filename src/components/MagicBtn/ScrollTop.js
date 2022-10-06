import React from "react";
import { BsArrowUpSquare } from "react-icons/bs";
import { useWindowScroll } from "@mantine/hooks";
import { Affix, Button, Transition } from "@mantine/core";

function ScrollTop() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Affix position={{ bottom: 10, right: 20 }}>
        <Transition transition={"slide-up"} mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button style={transitionStyles} onClick={() => scrollTo({ y: 0 })}>
              <BsArrowUpSquare size={24} />
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}

export default ScrollTop;
