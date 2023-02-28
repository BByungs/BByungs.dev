import React, { lazy, Suspense } from 'react';
import { Flex, useColorModeValue } from '@chakra-ui/react';

import { maxWidth } from '@constants/maxWidth';
import ColorModeButton from './ColorModeButton';
import NavBar from './NavBar';
import SearchButton from './SearchButton';

const MainHeader = ({ checkMcIntosh }: { checkMcIntosh: boolean }) => {
  const headerBg = useColorModeValue('white', 'gray.800');
  const borderBottomColor = useColorModeValue('#e0e0e0', 'white');

  return (
    <React.Fragment>
      <Flex
        as="header"
        borderColor={borderBottomColor}
        w="100%"
        bg={headerBg}
        h="66px"
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          w={maxWidth}
          mx="auto"
          px="20px"
        >
          <NavBar />
          <Flex alignItems="center" columnGap="10px" mt="5px">
            <SearchButton checkMcIntosh={checkMcIntosh} />

            <ColorModeButton />
          </Flex>
        </Flex>
      </Flex>
    </React.Fragment>
  );
};

export default MainHeader;
