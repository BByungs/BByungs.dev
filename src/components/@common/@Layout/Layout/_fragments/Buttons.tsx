import React from 'react';
import { Button, Flex, Icon } from '@chakra-ui/react';
import { MdOutlinePerson } from 'react-icons/md';
import { TbEdit } from 'react-icons/tb';
import { FiLogOut } from 'react-icons/fi';

const Buttons = () => {
  const isLogin = false;
  return (
    <Flex gap="15px" alignItems="center">
      <Button variant="unstyled" minW="30px !important" boxSize="30px">
        <Icon as={isLogin ? FiLogOut : MdOutlinePerson} boxSize="30px" />
      </Button>

      <Button variant="unstyled" minW="30px !important" boxSize="30px">
        <Icon as={TbEdit} boxSize="30px" />
      </Button>
    </Flex>
  );
};

export default Buttons;
