import Layout from '@components/@common/@Layout/Layout';
import HomePage from '@components/HomePage/HomePage';

import { allBlogs } from 'contentlayer/generated';
import { InferGetStaticPropsType, NextPage } from 'next';

export const getStaticProps = async () => {
  const blogs = allBlogs;

  return {
    props: {
      blogs,
    },
  };
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blogs,
}) => {
  return <Layout p="0px 20px" mt="20px" content={<HomePage blogs={blogs} />} />;
};

export default Home;
