import React, { useCallback, useEffect, useState } from 'react';
import {
  Button,
  Flex,
  Icon,
  Skeleton,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { FiCommand } from 'react-icons/fi';
import SearchModal from './SearchModal';

const SearchButton = () => {
  const {
    isOpen: isSearchOpen,
    onOpen: openSearch,
    onClose: closeSearch,
  } = useDisclosure();

  const [isMcIntosh, handleMcIntosh] = useState<boolean>(true);
  useEffect(() => {
    if (typeof navigator === 'undefined') return;
    const isMac: boolean = /(Mac|iPhone|iPod|iPad)/i.test(navigator.userAgent);
    handleMcIntosh(isMac);
  }, []);

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      const hotkey = isMcIntosh ? 'metaKey' : 'ctrlKey';
      /**
       * @Description Mac, Ios, IPad, IPod...환경이면서 동시에 command + k를 눌렀을때 동작
       * @Description 위와 다른환경이면서 동시에 Ctrl + k를 눌렀을때 동작
       */
      if (event[hotkey] && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        isSearchOpen ? closeSearch() : openSearch();
      }
    },
    [closeSearch, isSearchOpen, openSearch, isMcIntosh]
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
        aria-label="search-btn"
        onClick={openSearch}
        w="110px"
      >
        <Text color="black" textStyle="sm">
          Search
        </Text>

        <Flex
          borderRadius="5px"
          bgColor="white"
          columnGap="3px"
          alignItems="center"
          py="2px"
          px="5px"
          w="44px"
          display={isMcIntosh ? 'flex' : 'none'}
        >
          <Icon
            as={FiCommand}
            color="black"
            boxSize="12px"
            display={isMcIntosh ? 'block' : 'none'}
          />
          <Text color="black" textStyle="sm_bold">
            {`${isMcIntosh ? '+' : 'Ctrl +'} K`}
          </Text>
        </Flex>
      </Button>

      <SearchModal isOpen={isSearchOpen} onClose={closeSearch} />
    </React.Fragment>
  );
};

export default SearchButton;
