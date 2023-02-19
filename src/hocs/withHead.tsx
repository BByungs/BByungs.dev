import { METADATA, MetaDataType } from '@configs/metaData';
import Head from 'next/head';

function withHead(Component: React.FC, customMeta?: MetaDataType) {
  return function WrappedAppComponent() {
    const metadata = { ...METADATA, ...customMeta };
    return (
      <>
        <Head>
          <meta name="description" content={metadata.description} />
          <meta property="og:site_name" content={metadata.title} />
          <meta property="og:title" content={metadata.title} />
          <title>{metadata.title}</title>
          <meta
            property="og:description"
            content={metadata.description}
            key=""
          />
        </Head>
        <Component />
      </>
    );
  };
}

export default withHead;
