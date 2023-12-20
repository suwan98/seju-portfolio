import Image from "next/image";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
}

function ResponsiveImage({
  src,
  alt = "",
  className = "",
}: ResponsiveImageProps) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        objectFit="cover"
        className={`w-full h-full ${className}`}
      />
    </>
  );
}

export default ResponsiveImage;
