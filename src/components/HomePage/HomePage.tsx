import React, { useState } from 'react';
import NextSeoWrapper from '@components/@common/NextSeoWrapper';
import { METADATA } from '@configs/metaData';
import { UserInfo } from './_fragments';
import { Blog } from 'contentlayer/generated';
import TagList from '@components/@common/TagList';
import PostList from '@components/@common/PostList';

export interface HomePageProps {
  blogs: Blog[];
}

const HomePage = ({ blogs }: HomePageProps) => {
  const metadata = { ...METADATA, url: '/' };
  const tagList = ['ALL'].concat(
    Array.from(new Set(blogs.flatMap(({ tags }) => tags ?? ''))).filter(
      (tag) => !!tag.length,
    ),
  );
  const [selectTag, setSelectTag] = useState<string>('ALL');
  const handleTag = (tag: string) => setSelectTag(tag);

  return (
    <NextSeoWrapper metaData={metadata}>
      {/* User Info */}
      <UserInfo mb="40px" />
      {/* Tag List */}
      <TagList
        tagList={tagList}
        handleTag={handleTag}
        selectTag={selectTag}
        mb="40px"
      />
      {/* Blog List */}
      <PostList posts={blogs} selectTag={selectTag} />
    </NextSeoWrapper>
  );
};

export default HomePage;
