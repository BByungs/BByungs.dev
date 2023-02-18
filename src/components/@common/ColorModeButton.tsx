import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const ColorModeButton = () => {
  const { toggleColorMode } = useColorMode();
  const colorModeIcon = useColorModeValue(
    <SunIcon boxSize="24px" />,
    <MoonIcon boxSize="24px" />
  );
  const buttonBg = useColorModeValue('white', 'gray.800');
  const buttonBorderColor = useColorModeValue('gray.800', 'white');
  return (
    <Button
      onClick={toggleColorMode}
      variant="unstyled"
      boxSize="40px"
      position="fixed"
      bottom="20px"
      right="20px"
      zIndex="sticky"
      bg={buttonBg}
      border="1px solid"
      borderColor={buttonBorderColor}
      borderRadius="100%"
    >
      {colorModeIcon}
    </Button>
  );
};

export default ColorModeButton;
