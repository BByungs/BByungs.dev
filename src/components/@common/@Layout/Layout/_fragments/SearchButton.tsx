import React, { useCallback, useEffect } from 'react';
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
      // todo window일땐 시작버튼 , mac일땐 command+k로 해야 함
      /**
       * if (window) {
       *  window key 감지 했을때 openSearch()
       * } else {
       *  command+k 감지 했을때 openSearch
       * }
       */

      // Command + K 버튼을 눌렀을때
      if (event.metaKey && event.key === 'k') {
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
          <Text color="black">K</Text>
        </Flex>
      </Button>

      <SearchModal isOpen={isSearchOpen} onClose={closeSearch} />
    </React.Fragment>
  );
};

export default SearchButton;
