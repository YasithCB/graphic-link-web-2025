import React, { memo, useEffect, useState } from "react";
import "../assets/css/home/Home.css";
import ServiceCategorySlider from "../component/ServiceCategorySlider";
import OurClients from "../component/OurClients";
import OurMembers from "../component/OurMembers";
import ServicesGrid from "../component/ServiceGrid";

const Home = () => {
  const [bottomBg, setBottomBg] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      setBottomBg(window.scrollY > 800 ? 0 : -1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="home main-content">
        <ServiceCategorySlider />
        <ServicesGrid />
        {/*<ServiceGallery />*/}
        <OurClients />
      </div>

      <section className="empty-bg-section"></section>
      <section className="bottom-img-bg" style={{ zIndex: bottomBg }}></section>

      <div className="position-relative main-content">
        <OurMembers />
      </div>
    </div>
  );
};

export default memo(Home);
