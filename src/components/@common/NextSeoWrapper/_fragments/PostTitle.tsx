import React from 'react';
import { Box, chakra, Flex, Text, useColorMode } from '@chakra-ui/react';
import { MetaDataType } from '@configs/metaData';
import usDateString from '@utils/date/usDateString';

const PostTitle = ({ metaData }: { metaData: MetaDataType }) => {
  const { colorMode } = useColorMode();

  return (
    <Flex flexDir="column" marginTop="2rem">
      <Flex
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        flexDir={{ base: 'column', sm: 'row' }}
        borderBottomWidth="2px"
        pb="10px"
        borderColor={colorMode === 'light' ? 'gray.800' : 'white'}
      >
        <chakra.h1
          apply="mdx.h1"
          as="h1"
          fontWeight="bold"
          fontSize="1.875rem"
          marginBottom="0.25rem"
          lineHeight={1.2}
          float="left"
          w={{ base: '100%', sm: 'auto' }}
        >
          {metaData.title}
        </chakra.h1>

        <Text float="left" w={{ base: '100%', sm: 'auto' }}>
          {usDateString(metaData.date)}
        </Text>
      </Flex>

      {/* Tags */}
      <Flex gap="10px" mt="10px" flexWrap="wrap">
        {metaData.tags.map((tag) => (
          <Box
            key={`page-tag:${tag}`}
            bgColor="#eaeaea"
            p="0px 5px"
            h="25px"
            borderRadius="5px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Text color="black" textStyle="sm_bold">
              {tag}
            </Text>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default PostTitle;
