import React, { useState } from 'react';
import { Snippets } from 'contentlayer/generated';
import { METADATA } from '@configs/metaData';
import NextSeoWrapper from '@components/@common/NextSeoWrapper';
import { Text, VStack } from '@chakra-ui/react';
import TagList from '@components/@common/TagList';
import PostList from '@components/@common/PostList';

const SnippetsPage = ({ snippetList }: { snippetList: Snippets[] }) => {
  const metadata = {
    ...METADATA,
    url: '/snippets',
    title: 'snippets | BByungs.dev',
  };

  const tagList = ['ALL'].concat(
    Array.from(new Set(snippetList.flatMap(({ tags }) => tags ?? ''))).filter(
      (tag) => !!tag.length
    )
  );
  const [selectTag, setSelectTag] = useState<string>('ALL');
  const handleTag = (tag: string) => setSelectTag(tag);

  return (
    <NextSeoWrapper metaData={metadata}>
      <VStack spacing="5px" alignItems="flex-start" mb="30px">
        <Text as="h1" textStyle="xl_bold">
          Code Snippets
        </Text>

        <Text>개발하면서 유용하게 쓰일 코드 조각들 입니다.</Text>
      </VStack>

      <TagList
        tagList={tagList}
        handleTag={handleTag}
        selectTag={selectTag}
        mb="40px"
      />

      <PostList posts={snippetList} selectTag={selectTag} />
    </NextSeoWrapper>
  );
};

export default SnippetsPage;
