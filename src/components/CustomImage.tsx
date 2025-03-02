import Image from "next/image";

interface Props {
  className?: string;
  src: string;
  alt: string;
}

const CustomImage = (props: Props) => {
  const { className, alt, src } = props;
  return (
    <Image
      width={0}
      height={0}
      sizes="100%"
      alt={alt}
      src={src}
      className={`cursor-pointer w-6 h-6 ${className}`}
    />
  );
};

export default CustomImage;
