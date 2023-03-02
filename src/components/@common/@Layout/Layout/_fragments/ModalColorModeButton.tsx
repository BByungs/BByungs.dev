import React, { useCallback, useMemo } from 'react';
import { Text, Button, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const ModalColorModeButton = ({ mode }: { mode: 'light' | 'dark' }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const conditionColor = useMemo(() => {
    return colorMode === mode ? 'black' : 'gray.300';
  }, [colorMode, mode]);

  const Icon = useMemo(() => {
    return mode === 'light' ? (
      <SunIcon boxSize="16px" color={conditionColor} />
    ) : (
      <MoonIcon boxSize="16px" color={conditionColor} />
    );
  }, [conditionColor, mode]);

  const handleColorMode = useCallback(
    (mode: 'light' | 'dark') => {
      if (mode === 'light' && colorMode === 'dark') {
        toggleColorMode();
        return;
      }
      mode === 'dark' && colorMode === 'light' && toggleColorMode();
    },
    [colorMode, toggleColorMode]
  );

  return (
    <Button
      display="flex"
      columnGap="15px"
      alignItems="center"
      justifyContent="flex-start"
      aria-label={`${mode}-mode-btn`}
      h="30px"
      onClick={() => handleColorMode(mode)}
      variant="unstyled"
    >
      {Icon}
      <Text color={conditionColor} fontSize="14px">
        {`${mode.replace(/^[a-z]/, (char) => char.toUpperCase())} Mode`}
      </Text>
    </Button>
  );
};

export default ModalColorModeButton;
