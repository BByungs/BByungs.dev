import { CONFIG } from '@config';
import { METADATA, MetaDataType } from '@configs/metaData';
import Head from 'next/head';

function withHead(Component: React.FC, customMeta?: MetaDataType) {
  return function WrappedAppComponent() {
    const metadata = { ...METADATA, ...customMeta };
    return (
      <>
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
          <meta
            name="google-site-verification"
            content={CONFIG.GOOGLE_SITE_VERIFICATION}
          />
        </Head>
        <Component />
      </>
    );
  };
}

export default withHead;

// google-site-verification=gBIdIA6LjIJ9rK3_jfZKoCSd_hls4IYlxa2UicsIs0Y
