import { METADATA, MetaDataType } from '@configs/metaData';
import Head from 'next/head';
import React from 'react';

function withHead(Component: React.FC, customMeta?: MetaDataType) {
  return function WrappedAppComponent() {
    const metadata = { ...METADATA, ...customMeta };
    return (
      <React.Fragment>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          {/* Title */}
          <meta property="og:site_name" content={metadata.title} key="" />
          <meta property="og:title" content={metadata.title} key="" />
          <title>{metadata.title}</title>
          {/* Description */}
          <meta content={metadata.description} name="description" key="" />
          <meta
            property="og:description"
            content={metadata.description}
            key=""
          />
          {/* Google Search Engine */}
          {/* Todo google search console에서 html태그 받아서 content에 넣어야 함 */}
          {/* <meta name="google-site-verification" content="" /> */}
        </Head>
        <Component />
      </React.Fragment>
    );
  };
}

export default withHead;
