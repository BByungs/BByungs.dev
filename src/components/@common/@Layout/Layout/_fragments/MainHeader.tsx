import React from 'react';
import { Flex } from '@chakra-ui/react';

import { maxWidth } from '@constants/maxWidth';
import ColorModeButton from './ColorModeButton';
import NavBar from './NavBar';
import SearchButton from './SearchButton';

const MainHeader = () => {
  return (
    <React.Fragment>
      <Flex as="header" w="100%" h="66px">
        <Flex
          alignItems="center"
          justifyContent="space-between"
          w={maxWidth}
          mx="auto"
          px="20px"
        >
          <NavBar />
          <Flex alignItems="center" columnGap="10px" mt="5px">
            <SearchButton />
            <ColorModeButton />
          </Flex>
        </Flex>
      </Flex>
    </React.Fragment>
  );
};

export default MainHeader;
