import Layout from '@components/@common/@Layout/Layout';
import SnippetSlugPage from '@components/SnippetSlugPage';
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { checkMcIntosh } from '@utils/isMcIntosh';
import { allSnippets, Snippets } from 'contentlayer/generated';

export const getStaticPaths = async (): Promise<GetStaticPathsResult> => {
  return {
    paths: allSnippets.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext): Promise<
  GetStaticPropsResult<{ snippet: Snippets; checkMcIntosh: boolean }>
> => {
  const snippet = allSnippets.find((p) => p.slug === params?.slug);
  const _checkMcIntosh = checkMcIntosh;

  return typeof snippet === 'undefined'
    ? {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    : {
        props: {
          snippet,
          checkMcIntosh: _checkMcIntosh,
        },
      };
};

const SnippetSlug: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  snippet,
  checkMcIntosh,
}) => (
  <Layout
    p="0px 20px"
    mt="20px"
    isScrollIndicator
    checkMcIntosh={checkMcIntosh}
    content={<SnippetSlugPage snippet={snippet} />}
  />
);

export default SnippetSlug;
