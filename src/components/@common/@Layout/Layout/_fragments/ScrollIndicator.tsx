import React from 'react';
import { Box } from '@chakra-ui/react';
import useScrollIndicator from '@hooks/useScrollIndicator';

const ScrollIndicator = () => {
  const { scrollRatio } = useScrollIndicator();

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
