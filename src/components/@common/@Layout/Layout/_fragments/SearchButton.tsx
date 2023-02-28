import React, { useCallback, useEffect, useState } from 'react';
import { Button, Flex, Icon, Text, useDisclosure } from '@chakra-ui/react';
import { FiCommand } from 'react-icons/fi';
import SearchModal from './SearchModal';

const SearchButton = () => {
  const {
    isOpen: isSearchOpen,
    onOpen: openSearch,
    onClose: closeSearch,
  } = useDisclosure();

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      const McIntoshHotKey = event.metaKey && event.key === 'k';
      // const WindowsHotKey = event.ctrlKey && event.key === 'k';

      // if (checkMcIntosh !== null) {
      //   /**
      //    * @Description Mac, Ios, IPad, IPod...환경이면서 동시에 command + k를 눌렀을때 동작
      //    */
      //   if (McIntoshHotKey) {
      //     isSearchOpen ? closeSearch() : openSearch();
      //   }
      // } else {
      //   /**
      //    * @Description 위와 다른환경이면서 동시에 Ctrl + k를 눌렀을때 동작
      //    */
      //   if (WindowsHotKey) {
      //     isSearchOpen ? closeSearch() : openSearch();
      //   }
      // }
      if (McIntoshHotKey) {
        isSearchOpen ? closeSearch() : openSearch();
      }
    },
    [closeSearch, isSearchOpen, openSearch]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  return (
    <React.Fragment>
      <Button
        type="button"
        variant="unstyled"
        p="10px"
        h="35px"
        bgColor="#eaeaea"
        borderRadius="10px"
        display="flex"
        columnGap="8px"
        onClick={openSearch}
      >
        <Text color="black">Search</Text>
        <Flex
          borderRadius="5px"
          bgColor="white"
          columnGap="3px"
          alignItems="center"
          py="2px"
          px="5px"
        >
          <Icon as={FiCommand} color="black" boxSize="12px" />
          <Text color="black" textStyle="sm_bold">
            {`+ K`}
          </Text>
        </Flex>
      </Button>

      <SearchModal isOpen={isSearchOpen} onClose={closeSearch} />
    </React.Fragment>
  );
};

export default SearchButton;
