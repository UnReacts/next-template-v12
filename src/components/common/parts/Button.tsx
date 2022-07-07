/* Button について
 *  ページ遷移に使う場合は 以下をコンポーネントに渡す
 *  onClick={() => router.push('/path')}
 *
 *  外部サイトを別タブで開く場合は以下をコンポーネントに渡す
 *  onClick={
 *    () => window.open('/path', '_blank', 'noreferrer');
 *  }
 */

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  colorInverse?: boolean;
  children: React.ReactNode;
};

const Button = (props: ButtonProps): JSX.Element => {
  const { children, colorInverse = false, className = '', ...buttonHTMLAttributes } = props;

  return (
    <button
      {...buttonHTMLAttributes}
      className={`block w-full rounded-md border border-theme p-2 text-center text-sm duration-300 md:p-3 md:text-base ${
        colorInverse ? 'bg-white text-theme hover:shadow-lg' : 'bg-theme text-white hover:shadow-lg'
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
