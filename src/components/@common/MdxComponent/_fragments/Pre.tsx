import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import { chakra, useColorModeValue } from '@chakra-ui/react';

const Pre = ({
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('black', 'white');

  return (
    <chakra.pre
      apply="mdx.code"
      minH="100px"
      h="auto"
      bgColor={bgColor}
      borderColor={borderColor}
      border="1px solid"
      borderRadius="10px"
      padding="20px"
      pos="relative"
      {...props}
    />
  );
};

export default Pre;
