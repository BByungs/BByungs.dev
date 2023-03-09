import React, { ReactNode, useMemo } from 'react';
import { MetaDataType } from '@configs/metaData';
import { NextHead, PostTitle } from './_fragments';

interface NextSeoWrapperProps {
  metaData: MetaDataType;
  children: ReactNode;
}

const NextSeoWrapper = ({ metaData, children }: NextSeoWrapperProps) => {
  const isHome = useMemo(() => {
    return (
      metaData.url === '/' ||
      metaData.url === '/snippets' ||
      metaData.url === '/about'
    );
  }, [metaData.url]);

  return (
    <React.Fragment>
      <NextHead metaData={metaData} />
      <React.Fragment>
        {!isHome && <PostTitle metaData={metaData} />}
        {children}
      </React.Fragment>
    </React.Fragment>
  );
};

export default NextSeoWrapper;
