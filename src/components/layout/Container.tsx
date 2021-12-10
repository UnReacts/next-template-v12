type Props = {
  className?: string;
  isFullWidth?: boolean;
  children: React.ReactNode;
};

const Container = ({ className = '', isFullWidth = false, children }: Props) => {
  return (
    <div className={`px-6 md:px-10 ${isFullWidth ? '' : 'mx-auto max-w-6xl'} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
