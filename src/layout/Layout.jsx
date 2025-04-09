import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import MiniFooter from "../components/footer/MiniFooter";
import MainHeader from "../components/header/MainHeader";
import HomePageHeader from "../components/header/HomePageHeader";

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(false);
      return;
    }
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <>
      {isHomePage ? (
        isScrolled ? (
          <MainHeader />
        ) : (
          <HomePageHeader />
        )
      ) : (
        <MainHeader />
      )}
      <Outlet />
      <Footer />
      <MiniFooter />
    </>
  );
};

export default Layout;
