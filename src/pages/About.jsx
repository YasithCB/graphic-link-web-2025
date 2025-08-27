import React, { memo } from "react";
import PageHeader from "../component/PageHeader";

const About = () => {
  return (
    <section className="about-section">
      <PageHeader
        title="About Us"
        backgroundImage={"/images/about/about-header.jpg"}
        breadcrumb={[{ label: "Home", link: "/" }, { label: "About" }]}
      />

      {/*About us*/}
      <div className="container my-5">
        <div className="row no-gutters align-items-center">
          {/*img*/}
          <div
            className="col-md-6 order-md-last img d-flex align-items-center justify-content-center"
            style={{
              backgroundImage: "url(/images/about/about-us-side-img.jpg)",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              height: "-webkit-fill-available",
            }}
          ></div>

          {/*text*/}
          <div className="col-md-6">
            <div className="text pt-5 px-md-5">
              <div className="px-4 px-lg-4">
                <div className="desc text-md-right text-white">
                  <div className="top">
                    <span className="sub-title">Dream it. Print it.</span>
                    <h2 className="text-white mb-4">
                      <span className="yellow-text">Who</span> We Are
                    </h2>
                  </div>
                  <div className="absolute">
                    <p>
                      Welcome to Graphic Links, your ultimate partner in standout 3D
                      Signage,Polysign, and Acrylic Signage solutions. Based in Abu Dhabi, We
                      specialize in creating visually striking and impactful signs that help your
                      brand rise above the cluttered digital landscape
                    </p>
                  </div>

                  <div className="col-md-6 text-right">
                    <h4 className="yellow-text">Our Mission</h4>
                    <p>
                      To provide innovative, sustainable, and customer-focused services while
                      maintaining excellence and integrity in everything we do.
                    </p>
                  </div>

                  <div className="col-md-6 text-left">
                    <h4 className="yellow-text">Our Vision</h4>
                    <p>
                      To be the leading company in delivering high-quality solutions that empower
                      businesses and communities worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(About);
