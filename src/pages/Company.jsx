import React, { memo } from "react";

import "aos/dist/aos.css";
import VisionMissionCarousel from "../component/VisionMissionCarousel";
import PersonCardLandscape from "../component/PersonCardLandscape";

const Home = () => {
  return (
    <>
      {/*welcome to graphic link*/}
      <div className="col-md-12 portfolio-wrap mt-3">
        <div className="row no-gutters align-items-center">
          <div
            className="col-md-6 order-md-last img d-flex align-items-center justify-content-center"
            style={{
              backgroundImage: "url(/images/home/herculis-laptop.jpg)",
              backgroundPosition: "center",
              backgroundSize: "contain",
              height: "-webkit-fill-available",
            }}
          ></div>
          <div className="col-md-6">
            <div className="text pt-5 px-md-5">
              <div className="px-4 px-lg-4">
                <div className="desc text-md-right text-white">
                  <div className="top">
                    <span className="subheading">Dream it. Print it.</span>
                    <h2 className="mb-4">
                      <a href="#">
                        <span className="yellow-text">Welcome to</span> <br />
                        Graphic Link
                      </a>
                    </h2>
                  </div>
                  <div className="absolute">
                    <p>
                      When we say we’re not happy until you’re happy, we really do mean it. So
                      whether it’s a typo or an image that didn’t print quite the way you hoped,
                      we’ll do everything we can to fix it. We love great design and believe it can
                      work wonders for every business. That’s why we make it simple to create
                      beautiful, expertly crafted business stationery.
                    </p>
                  </div>
                  <p>
                    <a href="#" className="custom-btn">
                      TODO
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*about us*/}
      <div className="col-md-12 portfolio-wrap mt-3">
        <div className="row no-gutters align-items-center">
          <div className="text pt-5 px-md-5">
            <div className="px-4 px-lg-4 text-white">
              <div className="desc text-center">
                <span className="subheading">Who We Are</span>

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

      {/*Vision and Mission*/}
      <div className="col-md-12 portfolio-wrap mt-3">
        <div className="row no-gutters align-items-center">
          <div className="text pt-5 px-0">
            <div className="ext-white">
              <div className="desc text-center">
                <span className="subheading">Shaping Tomorrow Together</span>

                <h2 className={"mb-3"}>
                  <span className="yellow-text">Vision</span> And Mission
                </h2>

                <VisionMissionCarousel />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Team Members*/}
      <div className="col-md-12 portfolio-wrap mt-3">
        <div className="row no-gutters align-items-center">
          <div className="text pt-5 px-0">
            <div className="ext-white">
              <div className="desc text-center">
                <span className="subheading">Meet the Creative Minds Behind Our Work</span>

                <h2 className={"mb-3"}>
                  <span className="yellow-text">Team</span> Members
                </h2>

                <PersonCardLandscape
                  name={"Fredrick Armstrong"}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!"
                  }
                  imageUrl={"images/person_1.jpg"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Home);
