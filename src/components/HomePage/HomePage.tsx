import NextSeoWrapper from '@components/@common/NextSeoWrapper';
import { METADATA } from '@configs/metaData';
import { UserInfo } from './_fragments';
import { Blog } from 'contentlayer/generated';
import PostOrganism from '@components/@common/PostOrganism';

interface HomePageProps {
  posts: Blog[];
}

const HomePage = ({ posts }: HomePageProps) => {
  const metadata = { ...METADATA, url: '/' };

  return (
    <NextSeoWrapper metaData={metadata}>
      <UserInfo mb="40px" />
      <PostOrganism posts={posts} />
    </NextSeoWrapper>
  );
};

export default HomePage;
