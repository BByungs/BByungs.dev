import React from 'react';
import NextSeoWrapper from '@components/@common/NextSeoWrapper';
import { METADATA } from '@configs/metaData';
import { Blog } from 'contentlayer/generated';
import { BlogList, UserInfo } from './_fragments';

export interface HomePageProps {
  blogs: Blog[];
}

const HomePage = ({ blogs }: HomePageProps) => {
  const metadata = { ...METADATA, url: '/' };

  return (
    <NextSeoWrapper metaData={metadata}>
      {/* User Info */}
      <UserInfo mb="40px" />

      {/* Blog List */}
      <BlogList blogs={blogs} />
    </NextSeoWrapper>
  );
};

export default HomePage;
