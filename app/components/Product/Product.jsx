import Link from "next/link";
import Image from "next/image";

const Product = ({ slug, name, price, description, image }) => {
  const imgUrl = process.env.NEXT_PUBLIC_API_URL + image.data.attributes.url;
  return (
    <Link
      className="w-[49%] overflow-hidden md:w-[24%]"
      href={`/product/${slug}`}
    >
      <div className="relative">
        <Image
          src={imgUrl}
          alt={name}
          width={image.data.attributes.width}
          height={image.data.attributes.height}
          className="max-w-full"
        />
        <div className="absolute left-0 top-0 hidden h-full w-full cursor-pointer bg-black bg-opacity-80 text-sm text-white opacity-0 transition-all duration-300 hover:opacity-100 md:block">
          <h3 className="px-4 pt-4 text-lg">{name}</h3>
          <p className="mt-2 p-4">{description}</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between py-3 text-center">
        <p className="text-sm font-medium md:text-base">{name}</p>
        <p className="mt-2 text-sm font-medium md:text-base">£{price}</p>
      </div>
    </Link>
  );
};

export default Product;
