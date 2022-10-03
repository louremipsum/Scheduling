import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useWindowScroll } from "@mantine/hooks";
import { Affix, Button, Transition } from "@mantine/core";

function ScrollTop() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition={"slide-up"} mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftIcon={<AiOutlineArrowUp />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to Top
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}

export default ScrollTop;
