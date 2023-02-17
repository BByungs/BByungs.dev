import { Box, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const HomePage = () => {
  const bg = useColorModeValue('red.500', 'red.200');
  const color = useColorModeValue('white', 'gray.800');

  return (
    <Box mb={4} bg={bg} color={color}>
      This boxs style will change based on the color mode.
    </Box>
  );
};

export default HomePage;
