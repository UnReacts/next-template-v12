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
      className={`p-2 w-full text-sm text-center block rounded-md border border-theme duration-300 md:p-3 md:text-base ${
        colorInverse ? 'text-theme bg-white hover:shadow-lg' : 'text-white bg-theme hover:shadow-lg'
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
