import DroneImages from "../components/home/DroneImages";
import Hero from "../components/home/Hero";
import HomeLogo from "../components/home/HomeLogo";
import HomeServices from "../components/home/HomeServices";
import HomeShops from "../components/home/HomeShops";
import HomeVideo from "../components/home/HomeVideo";
import HomeProgram from "../components/home/Program";

const HomePage = () => {
  return (
    <>
      <Hero />
      <DroneImages />
      <HomeServices />
      <HomeProgram />
      <HomeShops />
      <HomeLogo />
      <HomeVideo />
    </>
  );
};
export default HomePage;
