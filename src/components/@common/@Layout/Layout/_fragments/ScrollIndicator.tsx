import React from 'react';
import { Box } from '@chakra-ui/react';
import useScrollIndicator from '@hooks/useScrollIndicator';

const ScrollIndicator = () => {
  const { scrollRatio } = useScrollIndicator();
  return (
    <React.Fragment>
      <Box
        borderBottomWidth="6px"
        borderColor="teal.500"
        w={`${scrollRatio}%`}
        pos="sticky"
        top="0"
        zIndex="sticky"
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
