import React from 'react';
import { UnorderedList } from '@chakra-ui/react';
import { HomePageProps } from '@components/@common/@Layout/HomeLayout/HomeLayout';
import BlogCard from './BlogCard';

const BlogList = ({ blogs }: HomePageProps) => {
  return (
    <UnorderedList m="0">
      {blogs.map((blog) => (
        <BlogCard
          key={`${blog._id}_${blog.title}_${blog.date}`}
          blogData={blog}
        />
      ))}
    </UnorderedList>
  );
};

export default BlogList;
