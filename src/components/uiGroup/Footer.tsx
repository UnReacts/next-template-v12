import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/layout/Container';

const footerLinkList = [
  { title: 'ホーム', link: '/' },
  { title: 'このサイトについて', link: '/' },
  { title: 'お問い合わせ', link: '/' },
  { title: 'プライバシーポリシー', link: '/' },
];

const Footer = () => {
  return (
    <footer className="py-10 bg-gray-50">
      <Container>
        <div className="flex flex-col justify-between items-start md:flex-row">
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
                    <a className="block py-2 mb-1 text-sm hover:opacity-75 duration-300 md:text-base">
                      {title}
                    </a>
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        </div>
        <small className="block mt-10 text-center md:text-right">&copy; 2021 UnReact</small>
      </Container>
    </footer>
  );
};

export default Footer;
