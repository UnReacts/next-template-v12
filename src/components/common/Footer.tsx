import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/common/parts/Container';

const footerLinkList = [
  { title: 'ホーム', link: '/' },
  { title: 'このサイトについて', link: '/' },
  { title: 'お問い合わせ', link: '/' },
  { title: 'プライバシーポリシー', link: '/' },
];

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-gray-50 py-10">
      <Container>
        <div className="flex flex-col items-start justify-between md:flex-row">
          {/* ロゴ */}
          <Link href="/">
            <a>
              <Image src="/vercel.svg" width={120} height={60} alt="vercel" />
            </a>
          </Link>

          {/* ナビゲーション */}
          <nav>
            <ol>
              {footerLinkList.map(({ title, link }) => (
                <li key={title}>
                  <Link href={link}>
                    <a className="mb-1 block py-2 text-sm duration-300 hover:opacity-75 md:text-base">
                      {title}
                    </a>
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        </div>
        <small className="mt-10 block text-center md:text-right">&copy; 2021 UnReact</small>
      </Container>
    </footer>
  );
};

export default Footer;
