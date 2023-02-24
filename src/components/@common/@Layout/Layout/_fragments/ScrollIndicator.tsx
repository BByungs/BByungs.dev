import { Box, BoxProps } from '@chakra-ui/react';
import useScrollIndicator from '@hooks/useScrollIndicator';

const ScrollIndicator = () => {
  const { scrollRatio } = useScrollIndicator();
  return (
    <>
      <Box
        h="66px"
        bgColor="transparent"
        borderBottomWidth="6px"
        borderColor="teal.500"
        w={`${scrollRatio}%`}
        pos="absolute"
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
    </>
  );
};

export default ScrollIndicator;
