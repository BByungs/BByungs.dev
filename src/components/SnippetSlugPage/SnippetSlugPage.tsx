import React from 'react';

import { Snippets } from 'contentlayer/generated';
import { METADATA } from '@configs/metaData';
import { useMDXComponent } from 'next-contentlayer/hooks';
import NextSeoWrapper from '@components/@common/NextSeoWrapper';
import { MDXComponents } from '@components/@common/MdxComponent/MdxComponent';
import type { MDXComponents as MDXComponentsType } from 'mdx/types';

const SnippetSlugPage = ({ snippet }: { snippet: Snippets }) => {
  const metadata = {
    ...METADATA,
    title: snippet.title,
    description: snippet.description,
    date: snippet.date,
    url: snippet.slug,
    thumbnailUrl: snippet.thumbnailUrl,
    tags: snippet.tags ?? [],
  };

  const Component = useMDXComponent(snippet.body.code);
  return (
    <NextSeoWrapper metaData={metadata}>
      <Component components={MDXComponents as MDXComponentsType} />
    </NextSeoWrapper>
  );
};

export default SnippetSlugPage;
