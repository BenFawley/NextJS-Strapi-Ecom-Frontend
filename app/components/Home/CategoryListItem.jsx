import Image from "next/image";
import Link from "next/link";

const CategoryListItem = ({ imgData, title, className }) => {
  return (
    <Link
      href="/category/t-shirts"
      className={`rounded-lg border-[1px] border-sky-100 ${className} overflow-hidden`}
    >
      <Image
        src={imgData}
        quality={100}
        className="transition-all duration-300 hover:scale-110"
      />
      <h2 className="absolute bottom-2 left-4 text-xl font-medium text-gray-800">
        {title}
      </h2>
    </Link>
  );
};

export default CategoryListItem;
