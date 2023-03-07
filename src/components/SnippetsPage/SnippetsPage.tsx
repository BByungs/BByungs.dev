import React from 'react';
import { Snippets } from 'contentlayer/generated';
import { METADATA } from '@configs/metaData';
import NextSeoWrapper from '@components/@common/NextSeoWrapper';
import { Text, VStack } from '@chakra-ui/react';
import PostOrganism from '@components/@common/PostOrganism';

const SnippetsPage = ({ snippetList }: { snippetList: Snippets[] }) => {
  const metadata = {
    ...METADATA,
    url: '/snippets',
    title: 'snippets | BByungs.dev',
  };

  return (
    <NextSeoWrapper metaData={metadata}>
      <VStack spacing="5px" alignItems="flex-start" mb="30px">
        <Text as="h1" textStyle="xl_bold">
          Code Snippets
        </Text>
        <Text>개발하면서 유용하게 쓰일 코드 조각들 입니다.</Text>
      </VStack>

      <PostOrganism posts={snippetList} />
    </NextSeoWrapper>
  );
};

export default SnippetsPage;
