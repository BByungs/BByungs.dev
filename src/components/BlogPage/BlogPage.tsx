import React from 'react';
import Head from 'next/head';
import { METADATA } from '@configs/metaData';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { BlogLayoutProps } from '@components/@common/@Layout/BlogLayout/BlogLayout';

export interface BlogPage extends BlogLayoutProps {}

const BlogPage = ({ post }: BlogLayoutProps) => {
  const metadata = {
    ...METADATA,
    title: post.title,
    description: post.description,
  };
  const Component = useMDXComponent(post.body.code);

  return (
    <React.Fragment>
      <Head>
        <meta name="description" content={metadata.description} />
        <meta property="og:site_name" content={metadata.title} />
        <meta property="og:title" content={metadata.title} />
        <title>{metadata.title}</title>
        <meta property="og:description" content={metadata.description} key="" />
      </Head>
      <Component />
    </React.Fragment>
  );
};

export default BlogPage;
