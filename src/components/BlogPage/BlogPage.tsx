import React from 'react';
import { METADATA } from '@configs/metaData';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { MDXComponents } from '@components/@common/MdxComponent/MdxComponent';
import NextSeoWrapper from '@components/@common/NextSeoWrapper';
import { Blog } from 'contentlayer/generated';

const BlogPage = ({ post }: { post: Blog }) => {
  const metadata = {
    ...METADATA,
    title: post.title,
    description: post.description,
    date: post.date,
    url: post.slug,
    thumbnailUrl: post.thumbnailUrl,
    tags: post.tags ?? [],
  };

  const Component = useMDXComponent(post.body.code);
  return (
    <NextSeoWrapper metaData={metadata}>
      <Component components={MDXComponents as any} />
    </NextSeoWrapper>
  );
};

export default BlogPage;
