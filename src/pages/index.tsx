import Layout from '@components/@common/@Layout/Layout';
import HomePage from '@components/HomePage/HomePage';
import { checkMcIntosh } from '@utils/isMcIntosh';
import { allBlogs } from 'contentlayer/generated';
import { InferGetStaticPropsType, NextPage } from 'next';

export const getStaticProps = async () => {
  const _checkMcIntosh = checkMcIntosh;
  return {
    props: {
      blogs: allBlogs,
      checkMcIntosh: _checkMcIntosh,
    },
  };
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blogs,
  checkMcIntosh,
}) => (
  <Layout
    checkMcIntosh={checkMcIntosh}
    p="0px 20px"
    mt="20px"
    content={<HomePage blogs={blogs} />}
  />
);

export default Home;
