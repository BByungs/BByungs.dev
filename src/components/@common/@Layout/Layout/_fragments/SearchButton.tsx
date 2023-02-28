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

  const [checkMcIntosh, setCheckMcIntosh] = useState<boolean>(true);
  useEffect(() => {
    if (typeof navigator === 'undefined') return;
    const isMac = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
    if (!isMac) {
      setCheckMcIntosh(false);
    }
  }, []);

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      const hotkey = checkMcIntosh ? 'metaKey' : 'ctrlKey';
      /**
       * @Description Mac, Ios, IPad, IPod...환경이면서 동시에 command + k를 눌렀을때 동작
       * @Description 위와 다른환경이면서 동시에 Ctrl + k를 눌렀을때 동작
       */
      if (event[hotkey] && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        isSearchOpen ? closeSearch() : openSearch();
      }
    },
    [closeSearch, isSearchOpen, openSearch, checkMcIntosh]
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
          <Icon
            as={FiCommand}
            color="black"
            boxSize="12px"
            display={checkMcIntosh ? 'block' : 'none'}
          />
          <Text color="black" textStyle="sm_bold">
            {`${checkMcIntosh ? '+' : 'Ctrl +'} K`}
          </Text>
        </Flex>
      </Button>

      <SearchModal isOpen={isSearchOpen} onClose={closeSearch} />
    </React.Fragment>
  );
};

export default SearchButton;
