import React from 'react';
import { Blog, Snippets } from 'contentlayer/generated';
import { Flex, ListItem, Text, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import usDateString from '@utils/date/usDateString';
import dayjs from 'dayjs';

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
          marginBottom: '20px',
        },
      }}
    >
      <Link href={`/${postData.type.toLowerCase()}/${postData.slug}`}>
        <Flex
          alignItems="center"
          border="1px solid"
          borderRadius="10px"
          borderColor="#eaeaea"
          p="10px"
        >
          <Flex flexDir="column">
            <Text as="h1" color="teal.400" textStyle="md_bold">
              {postData.title}
            </Text>
            <Text mb="20px" textStyle="smlg_bold">
              {postData.description}
            </Text>

            <Text textStyle="sm">
              {dayjs(postData.date).format('YY.MM.DD')}
            </Text>
          </Flex>
        </Flex>
      </Link>
    </ListItem>
  );
};

export default React.memo(PostCard);
