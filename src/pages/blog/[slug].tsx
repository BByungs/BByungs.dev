import Layout from '@components/@common/@Layout/Layout';
import BlogPage from '@components/BlogPage';
import { checkMcIntosh } from '@utils/isMcintosh';
import { allBlogs, Blog } from 'contentlayer/generated';
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType,
  NextPage,
} from 'next';

export const getStaticPaths = async (): Promise<GetStaticPathsResult> => {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext): Promise<
  GetStaticPropsResult<{ post: Blog; checkMcIntosh: boolean }>
> => {
  const post = allBlogs.find((p) => p.slug === params?.slug);
  const _checkMcIntosh = checkMcIntosh;
  return typeof post === 'undefined'
    ? {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    : {
        props: {
          post,
          checkMcIntosh: _checkMcIntosh,
        },
      };
};

const BlogSlug: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  post,
  checkMcIntosh,
}) => (
  <Layout
    p="0px 20px"
    mt="20px"
    isScrollIndicator
    checkMcIntosh={checkMcIntosh}
    content={<BlogPage post={post} />}
  />
);

export default BlogSlug;
