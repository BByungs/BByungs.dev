import React from 'react';

import { Snippets } from 'contentlayer/generated';
import { METADATA } from '@configs/metaData';
import { useMDXComponent } from 'next-contentlayer/hooks';
import NextSeoWrapper from '@components/@common/NextSeoWrapper';
import { MDXComponents } from '@components/@common/MdxComponent/MdxComponent';
import type { MDXComponents as MDXComponentsType } from 'mdx/types';

const SnippetSlugPage = ({ post }: { post: Snippets }) => {
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
      <Component components={MDXComponents as MDXComponentsType} />
    </NextSeoWrapper>
  );
};

export default SnippetSlugPage;
