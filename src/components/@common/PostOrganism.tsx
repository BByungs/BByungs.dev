import React, { useState } from 'react';
import PostList from './PostList';
import TagList from './TagList';
import { DocumentTypes } from 'contentlayer/generated';
import { Box, Text } from '@chakra-ui/react';
import { ommitedPaddingMaxWidth } from '@constants/maxWidth';

interface PostOrganismProps<T> {
  posts: T[];
}

const PostOrganism = <T extends DocumentTypes>({
  posts,
}: PostOrganismProps<T>) => {
  const existPosts = !!posts.length;
  const tagList = existPosts
    ? ['ALL'].concat(
        Array.from(new Set(posts.flatMap(({ tags }) => tags ?? ''))).filter(
          (tag) => !!tag.length,
        ),
      )
    : [];
  const [selectTag, setSelectTag] = useState<string>('ALL');
  const handleTag = (tag: string) => setSelectTag(tag);

  return existPosts ? (
    <React.Fragment>
      {/* Tag List */}
      <TagList
        tagList={tagList}
        handleTag={handleTag}
        selectTag={selectTag}
        mb="40px"
      />
      {/* Blog List */}
      <PostList posts={posts} selectTag={selectTag} />
    </React.Fragment>
  ) : (
    <Box pos="absolute" top="50%" w={ommitedPaddingMaxWidth}>
      <Text textAlign="center" textStyle="md_bold">
        No Posts!!
      </Text>
    </Box>
  );
};

export default PostOrganism;
