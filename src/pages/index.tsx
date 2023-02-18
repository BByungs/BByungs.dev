import Layout from '@components/@common/@Layout/Layout';
import HomePage from '@components/HomePage/HomePage';
import withHead from '@hocs/withHead';

const Home = () => <Layout p="0px 20px" mt="20px" content={<HomePage />} />;

export default withHead(Home);
