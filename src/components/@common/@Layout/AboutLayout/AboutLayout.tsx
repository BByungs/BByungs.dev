import AboutPage from '@components/AboutPage';
import React from 'react';
import Layout from '../Layout';

const AboutLayout = () => {
  return <Layout p="0px 20px" mt="20px" content={<AboutPage />} />;
};

export default AboutLayout;
