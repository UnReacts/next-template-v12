/* Container について
 *  max-width とページ左右の余白を設定した共通コンポーネント
 *  コンポーネントを作るときは基本的にこのコンポーネントで囲う
 *  Container の中で Container を使うと余白がずれるので気をつける
 */

type Props = React.HTMLAttributes<HTMLDivElement> & {
  fullWidth?: boolean;
  children: React.ReactNode;
};

const Container = (props: Props): JSX.Element => {
  const { fullWidth = false, children, className = '', ...divHTMLAttributes } = props;

  return (
    <div
      {...divHTMLAttributes}
      className={`px-6 md:px-10 ${fullWidth ? '' : 'mx-auto max-w-6xl'} ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
