import Layout from '@components/@common/@Layout/Layout';
import BlogPage from '@components/BlogPage';
import { allBlogs, Blog } from 'contentlayer/generated';
import { returnGSPaths, returnGSProps } from '@utils/nextStatic';
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType,
  NextPage,
} from 'next';

export const getStaticPaths = async (): Promise<GetStaticPathsResult> =>
  returnGSPaths(allBlogs);

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<{ post: Blog }>> =>
  returnGSProps(allBlogs, params?.slug);

const BlogSlug: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  post,
}) => (
  <Layout
    p="0px 20px"
    mt="20px"
    isScrollIndicator
    content={<BlogPage post={post} />}
  />
);

export default BlogSlug;
