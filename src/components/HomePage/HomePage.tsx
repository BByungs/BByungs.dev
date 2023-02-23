import React from 'react';
import NextSeoWrapper from '@components/@common/NextSeoWrapper';
import { METADATA } from '@configs/metaData';
import { BlogList, UserInfo } from './_fragments';
import { HomePageProps } from '@components/@common/@Layout/HomeLayout/HomeLayout';

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
