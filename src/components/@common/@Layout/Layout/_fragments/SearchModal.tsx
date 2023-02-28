import React, { useCallback } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  InputGroup,
  Input,
  InputLeftElement,
  Flex,
  Text,
  Button,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

import { allDocuments } from 'contentlayer/generated';
import { MoonIcon, SearchIcon, SunIcon } from '@chakra-ui/icons';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  //   console.log('@@allDocuments : ', allDocuments);

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
            />
          </InputGroup>
        </ModalHeader>
        {/* Search Result List */}
        <ModalBody p="20px">
          {/* ColorModeButton */}

          <Flex flexDir="column">
            <Text color="gray.500" mb="10px">
              Change Color Mode
            </Text>
            <Button
              display="flex"
              variant="unstyled"
              columnGap="15px"
              alignItems="center"
              justifyContent="flex-start"
              h="30px"
            >
              <SunIcon boxSize="16px" color="black" />
              <Text color="black" textStyle="sm">
                Light Mode
              </Text>
            </Button>
            <Button
              display="flex"
              variant="unstyled"
              columnGap="15px"
              alignItems="center"
              justifyContent="flex-start"
              h="30px"
            >
              <MoonIcon boxSize="16px" color="black" />
              <Text color="black" textStyle="sm">
                Dark Mode
              </Text>
            </Button>
          </Flex>

          {/* Command Keys */}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SearchModal;
