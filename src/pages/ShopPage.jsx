import Shop from "../components/shopPage/Shop";
import BannerSection from "../components/reusable/BannerSection";


const ShopPage = () => {
  return (
    <>
      <BannerSection subtitle={"Items"} title={"Shops"} />
      <Shop />
    </>
  );
};

export default ShopPage;
