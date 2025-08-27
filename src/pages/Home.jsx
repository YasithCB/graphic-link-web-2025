import React, { memo, useEffect, useState } from "react";
import "../assets/css/Home.css";
import ServiceCategorySlider from "../component/ServiceCategorySlider";
import ServiceGallery from "../component/ServiceGallery";
import OurClients from "../component/OurClients";

const Home = () => {
  const [bottomBg, setBottomBg] = useState(10);

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
        {/*about us*/}
        <div className="col-md-12 mt-3">
          <div className="row no-gutters align-items-center">
            <div className="text pt-5 px-md-5">
              <div className="px-4 px-lg-4 text-white">
                <div className="desc text-center">
                  <span className="sub-title">Who We Are</span>

                  <h2 className={"mb-5"}>
                    <span className="yellow-text">About</span> Graphic Link
                  </h2>

                  <p>
                    Welcome to Graphic Links, your ultimate partner in standout 3D Signage,Polysign,
                    and Acrylic Signage solutions. Based in Abu Dhabi, We specialize in creating
                    visually striking and impactful signs that help your brand rise above the
                    cluttered digital landscape
                  </p>
                  <p>
                    <a href="#" className="custom-btn">
                      {/*TODO*/}
                      Download Our Profile Now
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ServiceCategorySlider />
        <ServiceGallery />
        <OurClients />
      </div>

      <section className="empty-bg-section"></section>
      <section className="bottom-img-bg" style={{ zIndex: bottomBg }}></section>
    </div>
  );
};

export default memo(Home);
