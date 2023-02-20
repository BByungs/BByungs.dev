import React from 'react';
import Layout from '../Layout';
import { Blog } from 'contentlayer/generated';
import BlogPage from '@components/BlogPage';

export interface BlogLayoutProps {
  post: Blog;
}

const BlogLayout = ({ post }: BlogLayoutProps) => {
  return <Layout p="0px 20px" mt="20px" content={<BlogPage post={post} />} />;
};

export default BlogLayout;
