import React from 'react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react';

const ColorModeButton = () => {
  const { toggleColorMode } = useColorMode();
  const colorModeIcon = useColorModeValue(
    <SunIcon boxSize="24px" />,
    <MoonIcon boxSize="24px" />
  );
  const buttonBg = useColorModeValue('white', 'gray.800');
  return (
    <Button
      onClick={toggleColorMode}
      variant="unstyled"
      boxSize="24px"
      bg={buttonBg}
      borderRadius="100%"
      aria-label="color-mode-btn"
    >
      {colorModeIcon}
    </Button>
  );
};

export default ColorModeButton;
