import Navbar from "./Navbar";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";
import MobileMenuIcons from "./MobileMenuIcons";
import MinicartIcon from "@/app/components/Checkout/Minicart/MinicartIcon";

async function getNavLinks() {
  const url = process.env.NEXT_PUBLIC_API_URL;
  try {
    const response = await fetch(`${url}/api/categories`);
    const data = response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

const Header = async () => {
  const links = await getNavLinks();

  return (
    <>
      <header className="sticky left-0 right-0 top-0 z-50 flex h-20 items-center justify-between border-b border-slate-300 bg-white px-4 shadow-sm">
        <div className="container mx-auto flex h-full w-full flex-row items-center justify-center md:justify-between xl:max-w-7xl">
          <MobileMenuIcons />
          <Link href="/" className="flex items-center gap-2">
            <Image
              className="rounded-br-lg rounded-tl-lg"
              src={Logo}
              alt="JLM Logo"
              quality={100}
              width={60}
              height={60}
            />
            <h1 className="hidden text-4xl font-extrabold  text-gray-800 md:block">
              Exhibit
            </h1>
          </Link>
          <Navbar links={links} isDesktop />

          <MinicartIcon isDesktop />
        </div>
      </header>
      <Navbar links={links} isMobile />
    </>
  );
};

export default Header;
