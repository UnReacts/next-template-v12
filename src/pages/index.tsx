import Container from '@/components/layout/Container';
import Layout from '@/components/layout/Layout';

const Home = (): JSX.Element => {
  return (
    <Layout path="/" title="サイトタイトル" noTitleTemplate={true} isTopPage={true}>
      <Container>Hello Next.js!</Container>
    </Layout>
  );
};

export default Home;
