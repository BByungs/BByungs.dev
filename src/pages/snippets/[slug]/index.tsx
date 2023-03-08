import Layout from '@components/@common/@Layout/Layout';
import SnippetSlugPage from '@components/SnippetSlugPage';
import { allSnippets, Snippets } from 'contentlayer/generated';
import { returnGSPaths, returnGSProps } from '@utils/nextStatic';
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType,
  NextPage,
} from 'next';

export const getStaticPaths = async (): Promise<GetStaticPathsResult> =>
  returnGSPaths(allSnippets);

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<{ post: Snippets }>> =>
  returnGSProps(allSnippets, params?.slug);

const SnippetSlug: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  post,
}) => (
  <Layout
    p="0px 20px"
    mt="20px"
    isScrollIndicator
    content={<SnippetSlugPage post={post} />}
  />
);

export default SnippetSlug;
