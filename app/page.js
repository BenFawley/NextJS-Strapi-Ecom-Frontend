import CategoryList from "./components/Home/CategoryList";
import HeroBanner from "./components/Home/HeroBanner";
import Newsletter from "./components/Home/Newsletter";
import WhyShopHere from "./components/Home/WhyShopHere";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <WhyShopHere />
      <CategoryList />
      <Newsletter />
    </>
  );
};

export default Home;
