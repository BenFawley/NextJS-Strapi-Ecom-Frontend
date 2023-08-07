import Image from "next/image";

const HeroImage = ({ src, className }) => {
  return (
    <div
      className={`relative overflow-hidden ${className} mx-auto w-1/2 max-w-[400px] md:w-1/4`}
    >
      <Image
        src={src}
        width={400}
        height={400}
        quality={100}
        className="w-full"
        alt="Hero banner asset"
      />
    </div>
  );
};

export default HeroImage;
