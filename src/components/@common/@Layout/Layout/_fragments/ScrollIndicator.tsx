import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';

const ScrollIndicator = () => {
  const [scrollRatio, setScrollRatio] = useState<number>(0);

  useEffect(() => {
    let timeoutId: null | ReturnType<typeof setTimeout> = null;
    const throttleTime = 15;

    const throttle = (callback: () => void, time: number) => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        callback();
        timeoutId = null;
      }, time);
    };

    const scrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollRatio(scrolled);
    };

    const scrollCallback = () => {
      throttle(scrollProgress, throttleTime);
    };

    window.addEventListener('scroll', scrollCallback);
    return () => window.removeEventListener('scroll', scrollCallback);
  }, [scrollRatio]);

  return (
    <React.Fragment>
      <Box
        w={`${scrollRatio}%`}
        pos="fixed"
        top="0px"
        left="0px"
        height="6px"
        border-radius="0px 2px 0px 0px"
        background="teal.500"
        zIndex="100"
      />
      <style global jsx>{`
        body {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        body::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera*/
        }
      `}</style>
    </React.Fragment>
  );
};

export default ScrollIndicator;
