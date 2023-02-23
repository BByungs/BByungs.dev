import HomeLayout from '@components/@common/@Layout/HomeLayout';
import { allBlogs } from 'contentlayer/generated';
import { InferGetStaticPropsType, NextPage } from 'next';

export const getStaticProps = async () => {
  return {
    props: {
      blogs: allBlogs,
    },
  };
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blogs,
}) => <HomeLayout blogs={blogs} />;

export default Home;
