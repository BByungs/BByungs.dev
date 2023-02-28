import Layout from '@components/@common/@Layout/Layout';
import AboutPage from '@components/AboutPage';
import { checkMcIntosh } from '@utils/isMcintosh';
import { InferGetStaticPropsType, NextPage } from 'next';

export const getStaticProps = async () => {
  const _checkMcIntosh = checkMcIntosh;
  return {
    props: {
      checkMcIntosh: _checkMcIntosh,
    },
  };
};

const About: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = () => {
  return (
    <Layout
      p="0px 20px"
      mt="20px"
      checkMcIntosh={checkMcIntosh}
      content={<AboutPage />}
    />
  );
};

export default About;
