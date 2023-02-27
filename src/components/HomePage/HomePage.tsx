import React, { useState } from 'react';
import NextSeoWrapper from '@components/@common/NextSeoWrapper';
import { METADATA } from '@configs/metaData';
import { BlogList, TagList, UserInfo } from './_fragments';
import { Blog } from 'contentlayer/generated';

export interface HomePageProps {
  blogs: Blog[];
}

const HomePage = ({ blogs }: HomePageProps) => {
  const metadata = { ...METADATA, url: '/' };
  const tagList = ['ALL'].concat(
    Array.from(new Set(blogs.flatMap(({ tags }) => tags ?? ''))).filter(
      (tag) => !!tag.length
    )
  );
  const [selectTag, setSelectTag] = useState<string>('ALL');
  const handleTag = (tag: string) => setSelectTag(tag);

  return (
    <NextSeoWrapper metaData={metadata}>
      {/* User Info */}
      <UserInfo mb="40px" />
      {/* Tag List */}
      <TagList tagList={tagList} handleTag={handleTag} selectTag={selectTag} />
      {/* Blog List */}
      <BlogList blogs={blogs} selectTag={selectTag} />
    </NextSeoWrapper>
  );
};

export default HomePage;
