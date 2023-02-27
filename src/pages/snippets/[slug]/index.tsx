import Layout from '@components/@common/@Layout/Layout';
import SnippetSlugPage from '@components/SnippetSlugPage';
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType,
  NextPage,
} from 'next';

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
  GetStaticPropsResult<{ snippet: Snippets }>
> => {
  const snippet = allSnippets.find((p) => p.slug === params?.slug);

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
        },
      };
};

const SnippetSlug: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  snippet,
}) => (
  <Layout
    p="0px 20px"
    mt="20px"
    isScrollIndicator
    content={<SnippetSlugPage snippet={snippet} />}
  />
);

export default SnippetSlug;
