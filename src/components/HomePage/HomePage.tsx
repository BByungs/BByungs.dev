import React from 'react';
import NextSeoWrapper from '@components/@common/NextSeoWrapper';
import { METADATA } from '@configs/metaData';
import { UserInfo } from './_fragments';
import { Blog } from 'contentlayer/generated';
import PostOrganism from '@components/@common/PostOrganism';

export interface HomePageProps {
  blogs: Blog[];
}

const HomePage = ({ blogs }: HomePageProps) => {
  const metadata = { ...METADATA, url: '/' };

  return (
    <NextSeoWrapper metaData={metadata}>
      <UserInfo mb="40px" />
      <PostOrganism posts={blogs} />
    </NextSeoWrapper>
  );
};

export default HomePage;
