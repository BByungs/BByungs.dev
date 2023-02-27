import React from 'react';
import { Blog, Snippets } from 'contentlayer/generated';
import { Flex, ListItem, Text, Image } from '@chakra-ui/react';
import Link from 'next/link';
import usDateString from '@utils/date/usDateString';

interface PostCardProps<T> {
  postData: T;
}

const PostCard = <T extends Blog | Snippets>({
  postData,
}: PostCardProps<T>) => {
  return (
    <ListItem
      listStyleType="none"
      css={{
        ':not(:last-child)': {
          marginBottom: '40px',
        },
      }}
    >
      <Link href={`/${postData.type.toLowerCase()}/${postData.slug}`}>
        <Flex
          alignItems="center"
          borderBottomWidth="2px"
          pb="30px"
          borderColor="gray.200"
        >
          <Flex flexDir="column">
            <Text as="h1" color="teal.400" textStyle="lg_bold">
              {postData.title}
            </Text>
            <Text mb="20px">{postData.description}</Text>

            <Text>{usDateString(postData.date)}</Text>
          </Flex>
        </Flex>
      </Link>
    </ListItem>
  );
};

export default React.memo(PostCard);
