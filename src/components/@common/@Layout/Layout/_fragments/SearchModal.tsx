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
} from '@chakra-ui/react';

import { SearchIcon } from '@chakra-ui/icons';

import { useRouter } from 'next/router';
import { ContactList, ModalColorBtnList, SearchResultList } from '.';
import { debounce } from '@utils/core';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState<string>('');

  const inputDebounce = debounce(
    (inputValue: string) => setInputValue(inputValue),
    300,
  );
  const handlePressKeyboard = (event: KeyboardEvent<HTMLInputElement>) => {
    inputDebounce(event.currentTarget.value);
  };

  /**
   * @Description 모달이 꺼지면 상태 초기화
   */
  useEffect(() => () => setInputValue(''), []);

  /**
   * @Description 링크 이동시 모달이 꺼지지 않는 이슈가 발생하여
   * 라우터 변경전, 모달 꺼버림
   */
  useEffect(() => {
    router.events.on('routeChangeStart', onClose);
    return () => router.events.off('routeChangeStart', onClose);
  }, [onClose, router.events]);

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
          {/* Contact */}
          <ContactList />
          {/* ColorModeButton */}
          <ModalColorBtnList />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SearchModal;
