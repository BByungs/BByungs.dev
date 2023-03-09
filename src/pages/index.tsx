import Layout from '@components/@common/@Layout/Layout';
import HomePage from '@components/HomePage/HomePage';
import { returnCategoryHomeGSProps } from '@utils/nextStatic';
import { allBlogs } from 'contentlayer/generated';
import { InferGetStaticPropsType, NextPage } from 'next';

export const getStaticProps = async () => returnCategoryHomeGSProps(allBlogs);

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => <Layout p="0px 20px" mt="20px" content={<HomePage posts={posts} />} />;

export default Home;
