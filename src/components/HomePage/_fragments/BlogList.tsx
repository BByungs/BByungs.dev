import React, { useCallback, useMemo } from 'react';
import { UnorderedList } from '@chakra-ui/react';

import BlogCard from './BlogCard';
import { Blog } from 'contentlayer/generated';
import { HomePageProps } from '../HomePage';

interface BlogListProps extends HomePageProps {
  selectTag: string;
}

const BlogList = ({ blogs, selectTag }: BlogListProps) => {
  const callback = useCallback(
    ({ tags }: Blog) => {
      if (selectTag !== 'ALL') {
        return tags ? tags.includes(selectTag) : false;
      }
      return true;
    },
    [selectTag]
  );

  const filteredBlogs = useMemo(
    () => blogs.filter(callback),
    [blogs, callback]
  );
  return (
    <UnorderedList m="0">
      {filteredBlogs.map((blog) => (
        <BlogCard
          key={`${blog._id}_${blog.title}_${blog.date}`}
          blogData={blog}
        />
      ))}
    </UnorderedList>
  );
};

export default BlogList;
