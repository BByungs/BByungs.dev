import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { throttle } from '@utils/core';

const ScrollIndicator = () => {
  const [scrollRatio, setScrollRatio] = useState<number>(0);

  useEffect(() => {
    const scrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollRatio(scrolled);
    };

    const scrollThrottle = throttle(scrollProgress, 10);

    window.addEventListener('scroll', scrollThrottle);
    return () => window.removeEventListener('scroll', scrollThrottle);
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
