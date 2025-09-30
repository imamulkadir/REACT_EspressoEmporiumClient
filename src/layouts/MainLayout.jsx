import React from "react";
import { Outlet, useLocation } from "react-router";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import FollowUs from "../components/FollowUs.jsx";
import Footer from "../components/Footer.jsx";

const MainLayout = () => {
  const location = useLocation();
  return (
    <div>
      <Header />
      {location.pathname === "/" && <Hero />} {/* ✅ Only on home */}
      <div className="mx-auto max-w-7xl">
        <Outlet />
      </div>
      {location.pathname === "/" && <FollowUs />}
      <Footer />
    </div>
  );
};

export default MainLayout;
