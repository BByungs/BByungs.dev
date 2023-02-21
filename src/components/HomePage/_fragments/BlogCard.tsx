import React from 'react';
import { Blog } from 'contentlayer/generated';
import { Flex, ListItem, Text, Image } from '@chakra-ui/react';
import Link from 'next/link';
import usDateString from '@utils/date/usDateString';

interface BlogCardProps {
  blogData: Blog;
}

const BlogCard = ({ blogData }: BlogCardProps) => {
  return (
    <ListItem
      listStyleType="none"
      css={{
        ':not(:last-child)': {
          marginBottom: '40px',
        },
      }}
    >
      <Link href={`/blog/${blogData.slug}`}>
        <Flex
          //   justify="space-between"
          // columnGap="30px"
          alignItems="center"
          borderBottomWidth="2px"
          pb="30px"
          borderColor="gray.200"
        >
          <Flex flexDir="column">
            <Text as="h1" color="teal.400" textStyle="large">
              {blogData.title}
            </Text>
            <Text mb="20px">{blogData.description}</Text>

            <Text>{usDateString(blogData.date)}</Text>
          </Flex>

          {/* <Box boxSize="100px" borderRadius="10px" overflow="hidden">
            <Image
              src={blogData.thumbnailUrl}
              w="inherit"
              h="inherit"
              alt={`${blogData.slug}_${blogData.title}`}
              objectFit="fill"
            />
          </Box> */}
        </Flex>
      </Link>
    </ListItem>
  );
};

export default React.memo(BlogCard);
