import React from 'react';
import { Button, Flex, Icon, Text } from '@chakra-ui/react';
import { FiCommand } from 'react-icons/fi';

const SearchButton = () => {
  return (
    <Button
      type="button"
      variant="unstyled"
      p="10px"
      h="35px"
      bgColor="#eaeaea"
      borderRadius="10px"
      display="flex"
      columnGap="8px"
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
  );
};

export default SearchButton;
