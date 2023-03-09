import Layout from '@components/@common/@Layout/Layout';
import SnippetsPage from '@components/SnippetsPage';
import { returnCategoryHomeGSProps } from '@utils/nextStatic';
import { allSnippets } from 'contentlayer/generated';
import { InferGetStaticPropsType, NextPage } from 'next';

export const getStaticProps = async () =>
  returnCategoryHomeGSProps(allSnippets);

const Snippets: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => (
  <Layout p="0px 20px" mt="20px" content={<SnippetsPage posts={posts} />} />
);

export default Snippets;
