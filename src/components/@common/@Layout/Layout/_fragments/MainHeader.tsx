import { Button, useColorMode } from '@chakra-ui/react';
import React from 'react';

const MainHeader = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode}>
      Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
    </Button>
  );
};

export default MainHeader;
