import React, { useMemo } from 'react';
import { Button, Flex, Image, useColorMode } from '@chakra-ui/react';
import NavBar from './NavBar';
import NavDrawer from './NavDrawer';

const MainHeader = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightMode = useMemo(() => {
    return colorMode === 'light';
  }, [colorMode]);
  return (
    <Flex
      as="header"
      h="66px"
      alignItems="center"
      justifyContent="space-between"
      pos="sticky"
      top="0"
      zIndex="sticky"
      bgColor={isLightMode ? 'white' : 'gray.800'}
      px="20px"
    >
      {/* PC VERSION(Tab형태) */}
      <NavBar display={{ base: 'none', sm: 'block' }} />
      {/* PC VERSION(Drawer) */}
      <NavDrawer display={{ base: 'block', sm: 'none' }} />

      <Flex>
        {/* COLOR MODE BUTTON */}
        <Button
          onClick={toggleColorMode}
          variant="unstyled"
          boxSize="30px"
          minW="30px !important"
        >
          <Image
            src={`/icons/${isLightMode ? 'sun' : 'moon'}.png`}
            alt="asdasd"
            boxSize="30px"
          />
        </Button>
        {/* <Button
          variant="unstyled"
          boxSize="30px"
          minW="30px !important"
        ></Button> */}
      </Flex>
    </Flex>
  );
};

export default MainHeader;
