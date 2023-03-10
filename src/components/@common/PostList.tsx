import React, { useCallback, useMemo } from 'react';
import { UnorderedList } from '@chakra-ui/react';

import { DocumentTypes } from 'contentlayer/generated';
import PostCard from './PostCard';

interface PostListProps<T> {
  posts: T[];
  selectTag: string;
}

const PostList = <T extends DocumentTypes>({
  posts,
  selectTag,
}: PostListProps<T>) => {
  const callback = useCallback(
    ({ tags }: T) => {
      if (selectTag !== 'ALL') {
        return tags ? tags.includes(selectTag) : false;
      }
      return true;
    },
    [selectTag],
  );

  const filteredPosts = useMemo(
    () => posts.filter(callback),
    [posts, callback],
  );

  return (
    <UnorderedList m="0" spacing="20px">
      {filteredPosts.map((post) => (
        <PostCard
          key={`${post._id}_${post.title}_${post.date}`}
          postData={post}
        />
      ))}
    </UnorderedList>
  );
};

export default PostList;
