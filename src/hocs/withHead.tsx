import { METADATA, MetaDataType } from '@configs/metaData';
import Head from 'next/head';

function withHead(Component: React.FC, customMeta?: MetaDataType) {
  return function WrappedAppComponent() {
    const metadata = { ...METADATA, ...customMeta };
    return (
      <>
        <Head>
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
        </Head>
        <Component />
      </>
    );
  };
}

export default withHead;
