import React from 'react';
import { METADATA } from '@configs/metaData';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { BlogLayoutProps } from '@components/@common/@Layout/BlogLayout/BlogLayout';
import { MDXComponents } from '@components/@common/MdxComponent/MdxComponent';
import NextSeoWrapper from '@components/@common/NextSeoWrapper';

export interface BlogPage extends BlogLayoutProps {}

const BlogPage = ({ post }: BlogLayoutProps) => {
  const metadata = {
    ...METADATA,
    title: post.title,
    description: post.description,
    date: post.date,
    url: post.slug,
    thumbnailUrl: post.thumbnailUrl,
  };

  const Component = useMDXComponent(post.body.code);
  return (
    <NextSeoWrapper metaData={metadata}>
      <Component components={MDXComponents as any} />
    </NextSeoWrapper>
  );
};

export default BlogPage;
