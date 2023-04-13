import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Education = () => {
  return (
    <Flex columnGap="20px" alignItems="center" flexWrap="wrap">
      <Text textStyle="lg_bold">Education</Text>

      <Text textStyle="smlg">경동고등학교 졸업 (2010.02 ~ 2013.02)</Text>
    </Flex>
  );
};

export default Education;
