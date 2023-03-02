import React, { KeyboardEvent, useEffect, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  InputGroup,
  Input,
  InputLeftElement,
  Flex,
  Text,
  Divider,
} from '@chakra-ui/react';

import { SearchIcon } from '@chakra-ui/icons';
import ModalColorModeButton from './ModalColorModeButton';
import SearchResultList from './SearchResultList';

import { debounce } from 'lodash';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [inputValue, setInputValue] = useState<string>('');
  const inputDebounce = debounce(
    (inputValue: string) => setInputValue(inputValue),
    200
  );
  const handlePressKeyboard = (event: KeyboardEvent<HTMLInputElement>) => {
    inputDebounce(event.currentTarget.value);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        width={{ base: '90%', mobile: '550px' }}
        borderRadius="14px"
        overflow="hidden"
        bgColor="white"
      >
        {/* Search bar */}
        <ModalHeader p="20px" borderBottomWidth="1px" borderColor="#eaeaea">
          <InputGroup>
            <InputLeftElement boxSize="20px" pointerEvents="none" mt="3px">
              <SearchIcon m="auto" color="black" />
            </InputLeftElement>
            <Input
              type="text"
              pl="30px"
              variant="unstyled"
              placeholder="Search..."
              color="black"
              onKeyUp={handlePressKeyboard}
              _placeholder={{
                color: 'gray.300',
              }}
            />
          </InputGroup>
        </ModalHeader>
        <ModalBody py="20px" px="0px">
          {/* Search Result List */}
          <SearchResultList inputValue={inputValue} />
          {/* ColorModeButton */}
          <Flex flexDir="column" px="20px">
            <Text color="gray.500" mb="10px" textStyle="sm">
              Color Mode
            </Text>
            <ModalColorModeButton mode="light" />
            <ModalColorModeButton mode="dark" />
          </Flex>

          {/* Command Keys */}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SearchModal;
