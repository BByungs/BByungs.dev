import React from 'react';
import { MetaDataType } from '@configs/metaData';
import Head from 'next/head';

const NextHead = ({ metaData }: { metaData: MetaDataType }) => {
  return (
    <Head>
      <meta name="description" content={metaData.description} />
      <meta property="og:site_name" content={metaData.title} />
      <meta property="og:title" content={metaData.title} />
      <title>{metaData.title}</title>
      <meta property="og:description" content={metaData.description} />
      {/* image */}
      <meta property="og:image" content={metaData.thumbnailUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {/* tags */}
      {metaData.tags.length &&
        metaData.tags.map((tag) => (
          <meta
            key={`article_tag:${tag}`}
            property="article:tag"
            content={tag}
          />
        ))}
    </Head>
  );
};

export default NextHead;
