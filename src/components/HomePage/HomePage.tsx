import React from 'react';
import NextSeoWrapper from '@components/@common/NextSeoWrapper';
import { METADATA } from '@configs/metaData';
import { Blog } from 'contentlayer/generated';
import { BlogCard } from './_fragments';
import { UnorderedList } from '@chakra-ui/react';

interface HomePageProps {
  blogs: Blog[];
}

const HomePage = ({ blogs }: HomePageProps) => {
  const metadata = {
    ...METADATA,
    url: '/',
  };

  return (
    <NextSeoWrapper metaData={metadata}>
      {/* Blog List */}
      <UnorderedList m="0">
        {blogs.map((blog) => (
          <BlogCard
            key={`${blog._id}_${blog.title}_${blog.date}`}
            blogData={blog}
          />
        ))}
      </UnorderedList>
    </NextSeoWrapper>
  );
};

export default HomePage;
