import NextSeoWrapper from '@components/@common/NextSeoWrapper';
import { METADATA } from '@configs/metaData';
import { Snippets } from 'contentlayer/generated';
import { Text, VStack } from '@chakra-ui/react';
import PostOrganism from '@components/@common/PostOrganism';

interface SnippetsPageProps {
  posts: Snippets[];
}

const SnippetsPage = ({ posts }: SnippetsPageProps) => {
  const metadata = {
    ...METADATA,
    url: '/snippets',
    title: 'Snippets - BByungs.dev',
  };

  return (
    <NextSeoWrapper metaData={metadata}>
      <VStack spacing="5px" alignItems="flex-start" mb="30px">
        <Text as="h1" textStyle="xl_bold">
          Code Snippets
        </Text>
        <Text>개발하면서 유용하게 쓰일 코드 조각들 입니다.</Text>
      </VStack>

      <PostOrganism posts={posts} />
    </NextSeoWrapper>
  );
};

export default SnippetsPage;
