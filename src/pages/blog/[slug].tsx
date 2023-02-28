import Layout from '@components/@common/@Layout/Layout';
import BlogPage from '@components/BlogPage';
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
}: GetStaticPropsContext): Promise<GetStaticPropsResult<{ post: Blog }>> => {
  const post = allBlogs.find((p) => p.slug === params?.slug);
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
        },
      };
};

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
