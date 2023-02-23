import SnippetsPage from '@components/SnippetsPage';
import React from 'react';
import Layout from '../Layout';

const SnippetsLayout = () => {
  return <Layout p="0px 20px" mt="20px" content={<SnippetsPage />} />;
};

export default SnippetsLayout;
