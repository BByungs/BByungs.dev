import { DocumentTypes } from 'contentlayer/generated';

export const returnGSPaths = <T extends DocumentTypes>(allPosts: T[]) => ({
  paths: allPosts.map((post) => ({
    params: { slug: post.slug },
  })),
  fallback: false,
});

export const returnGSProps = <T extends DocumentTypes>(
  allPosts: T[],
  slug: string | string[] | undefined,
) => {
  const post = allPosts.find((post) => post.slug === slug);
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
