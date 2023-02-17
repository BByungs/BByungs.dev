import Layout from '@components/@common/@Layout/Layout';
import HomePage from '@components/HomePage/HomePage';
import withHead from '@hocs/withHead';

const Home = () => <Layout content={<HomePage />} />;

export default withHead(Home);
