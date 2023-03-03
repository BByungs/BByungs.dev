import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

interface ModalItemWrapperProps {
  title: string;
  children: React.ReactNode | React.ReactNode[];
}

const ModalItemWrapper = ({ title, children }: ModalItemWrapperProps) => {
  return (
    <Flex flexDir="column" px="20px">
      <Text color="gray.500" mb="10px" textStyle="sm_bold">
        {title}
      </Text>
      {children}
    </Flex>
  );
};

export default ModalItemWrapper;
