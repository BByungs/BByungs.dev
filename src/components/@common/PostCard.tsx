import React from 'react';
import { DocumentTypes } from 'contentlayer/generated';
import { Flex, ListItem, Text } from '@chakra-ui/react';
import Link from 'next/link';
import usDateString from '@utils/date/usDateString';
import { CalendarIcon } from '@chakra-ui/icons';

interface PostCardProps<T> {
  postData: T;
}

const PostCard = <T extends DocumentTypes>({ postData }: PostCardProps<T>) => {
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
            {/* Title */}
            <Text as="h1" color="teal.400" textStyle="md_bold">
              {postData.title}
            </Text>
            {/* Description */}
            <Text mb="20px" textStyle="smlg_bold">
              {postData.description}
            </Text>
            {/* Date */}
            <Flex alignItems="center" gap="7px">
              <CalendarIcon boxSize="13px" />
              <Text textStyle="sm">{usDateString(postData.date)}</Text>
            </Flex>
            {/* Tags */}
            {postData.tags && (
              <Flex gap="5px" mt="10px" flexWrap="wrap">
                {postData.tags.map((tag, idx, allArr) => {
                  const isLastIdx = idx === allArr.length - 1;
                  return (
                    <Text key={`card_tag:${tag}`} textStyle="sm_bold">
                      {isLastIdx ? tag : `${tag} , `}
                    </Text>
                  );
                })}
              </Flex>
            )}
          </Flex>
        </Flex>
      </Link>
    </ListItem>
  );
};

export default React.memo(PostCard);
