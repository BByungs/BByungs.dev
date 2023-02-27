import Layout from '@components/@common/@Layout/Layout';
import SnippetsPage from '@components/SnippetsPage';

import { allSnippets } from 'contentlayer/generated';
import { InferGetStaticPropsType, NextPage } from 'next';

export const getStaticProps = async () => {
  return {
    props: {
      snippets: allSnippets,
    },
  };
};

const Snippets: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  snippets,
}) => (
  <Layout
    p="0px 20px"
    mt="20px"
    content={<SnippetsPage snippetList={snippets} />}
  />
);

export default Snippets;
