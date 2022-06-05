import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import Container from '@/components/common/parts/Container';

const headerLinkList = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/' },
  { title: 'Contact', link: '/' },
];

const Header = (): JSX.Element => {
  // ドロワーの開閉の状態
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // isOpen state を反転させる関数
  const handleMenuClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header className="relative py-3 shadow-md">
      <Container className="flex justify-between items-center">
        {/* ロゴ */}
        <Link href="/">
          <a>
            <Image src="/vercel.svg" width={120} height={60} alt="vercel" />
          </a>
        </Link>

        {/* PCのナビゲーション */}
        <nav className="hidden md:block">
          <ol className="flex space-x-10 font-bold">
            {headerLinkList.map(({ title, link }) => (
              <li className="group overflow-hidden cursor-pointer" key={title}>
                <Link href={link}>
                  <a>{title}</a>
                </Link>
                <span className="block w-full h-[3px] bg-primary duration-300 translate-x-[-101%] group-hover:translate-x-0"></span>
              </li>
            ))}
          </ol>
        </nav>

        {/* ハンバーガーボタン */}
        <button className="block relative z-50 w-12 h-12 md:hidden" onClick={handleMenuClick}>
          <span
            className={`inline-block absolute  h-1 bg-primary duration-300 ${
              isOpen
                ? 'top-5 left-4 w-[35%] transform translate-y-[6px] -rotate-45'
                : 'top-5 left-3 w-1/2'
            }`}
          />
          <span
            className={`inline-block absolute  h-1 bg-primary duration-300 ${
              isOpen
                ? 'top-8 left-4 w-[35%] transform translate-y-[-6px] rotate-45'
                : 'top-7 left-3 w-1/3'
            }`}
          />
        </button>

        {/* ドロワーメニュー表示時の背景オーバーレイ */}
        <div
          className={`fixed md:hidden top-0 left-0 transition-opacity duration-300
            ${isOpen ? 'z-10 bg-theme h-screen w-full opacity-25' : 'opacity-0'}
          `}
          onClick={handleMenuClick}
        />

        {/* ドロワーメニュー */}
        <nav
          className={`fixed md:hidden top-0 right-0 w-4/5 h-screen bg-theme-light duration-300 transform pt-28 px-6 z-20 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ol className="flex flex-col items-end space-y-2 font-bold">
            {headerLinkList.map(({ title, link }) => (
              <li key={title}>
                <Link href={link}>
                  <a className="py-2 px-4" onClick={handleMenuClick}>
                    {title}
                  </a>
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
