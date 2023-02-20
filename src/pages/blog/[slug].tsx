import BlogLayout from '@components/@common/@Layout/BlogLayout/BlogLayout';
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

const BlogPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  post,
}) => {
  return <BlogLayout post={post} />;
};

export default BlogPage;
