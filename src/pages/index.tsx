import { NextPage } from 'next';

import Layout from '@/components/common/Layout';
import Counter from '@/components/counter/Counter';
import { getRandomNum } from '@/lib/counterUtil';

const Home: NextPage = () => {
  const initialNum = getRandomNum();

  return (
    <Layout path="/" title="タイトル" noTitleTemplate isTopPage>
      <Counter initialNum={initialNum} />
    </Layout>
  );
};

export default Home;
