import { Box, BoxProps } from '@chakra-ui/react';
import useScrollIndicator from '@hooks/useScrollIndicator';

const ScrollIndicator = () => {
  const { scrollRatio } = useScrollIndicator();
  return (
    <Box
      h="66px"
      bgColor="transparent"
      borderBottomWidth="6px"
      borderColor="teal.500"
      w={`${scrollRatio}%`}
      pos="absolute"
    />
  );
};

export default ScrollIndicator;
