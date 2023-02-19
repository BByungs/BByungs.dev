import { Flex, useColorModeValue } from '@chakra-ui/react';

import { maxWidth } from '@constants/maxWidth';
import ColorModeButton from './ColorModeButton';
import NavBar from './NavBar';

const MainHeader = () => {
  const headerBg = useColorModeValue('white', 'gray.800');
  const borderBottomColor = useColorModeValue('#e0e0e0', 'white');

  return (
    <Flex
      as="header"
      borderColor={borderBottomColor}
      w="100%"
      borderBottomWidth="1px"
      pos="sticky"
      zIndex="sticky"
      top="0"
      bg={headerBg}
      h="66px"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        columnGap="20px"
        w={maxWidth}
        mx="auto"
        px="20px"
      >
        <NavBar />
        <ColorModeButton />
      </Flex>
    </Flex>
  );
};

export default MainHeader;
