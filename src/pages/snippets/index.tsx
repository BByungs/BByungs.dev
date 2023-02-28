import Layout from '@components/@common/@Layout/Layout';
import SnippetsPage from '@components/SnippetsPage';
import { checkMcIntosh } from '@utils/isMcIntosh';

import { allSnippets } from 'contentlayer/generated';
import { InferGetStaticPropsType, NextPage } from 'next';

export const getStaticProps = async () => {
  const _checkMcIntosh = checkMcIntosh;
  return {
    props: {
      snippets: allSnippets,
      checkMcIntosh: _checkMcIntosh,
    },
  };
};

const Snippets: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  snippets,
  checkMcIntosh,
}) => (
  <Layout
    p="0px 20px"
    mt="20px"
    checkMcIntosh={checkMcIntosh}
    content={<SnippetsPage snippetList={snippets} />}
  />
);

export default Snippets;
