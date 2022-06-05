import Image, { ImageProps } from 'next/image';

type MyImageProps = ImageProps & {
  alt: string;
  divProps: React.HTMLAttributes<HTMLDivElement>;
};

const MyImage = (props: MyImageProps): JSX.Element => {
  const { divProps, alt, ...imageProps } = props;
  return (
    <div {...divProps} style={{ letterSpacing: 0, wordSpacing: 0, fontSize: 0 }}>
      <Image {...imageProps} alt={alt} />
    </div>
  );
};

export default MyImage;
