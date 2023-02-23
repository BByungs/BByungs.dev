import HomePage from '@components/HomePage/HomePage';
import React from 'react';
import Layout from '../Layout';

import { Blog } from 'contentlayer/generated';

export interface HomePageProps {
  blogs: Blog[];
}

const HomeLayout = ({ blogs }: HomePageProps) => {
  return <Layout p="0px 20px" mt="20px" content={<HomePage blogs={blogs} />} />;
};

export default HomeLayout;
