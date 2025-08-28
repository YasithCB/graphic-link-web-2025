import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../assets/css/home/HeroSlider.css";
import React from "react";

export default function HeroSlider() {
  const slides = [
    {
      img: "/images/home/hero-1.png",
      title: "Welcome to Graphic Link",
      text: "When we say we’re not happy until you’re happy, we really do mean it. So whether it’s a typo or an image that didn’t print quite the way you hoped, we’ll do everything we can to fix it. We love great design and believe it can work wonders for every business. That’s why we make it simple to create beautiful, expertly crafted business stationery.",
      link: "",
    },
    {
      img: "/images/home/hero-2.png",
      title: "Wide range of Printing Services",
      text: "From design to delivery, we offer a complete range of printing services, ensuring you receive a seamless and hassle-free experience.",
      link: "#",
    },
    {
      img: "/images/home/hero-3.png",
      title: "Branding & Promotion Products",
      text: "If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.",
      link: "http://obelisk.themescamp.com/services/",
    },
    {
      img: "/images/home/hero-4.png",
      title: "Large Format Printing",
      text: "Graphic Link has proven its expertise as a leading printing press in the UAE for digital print solutions.",
      link: "http://obelisk.themescamp.com/services/",
    },
    {
      img: "/images/home/hero-5.png",
      title: "Offset Printing",
      text: "Graphic Link has proven its expertise as a leading printing press in the UAE for digital print solutions.",
      link: "http://obelisk.themescamp.com/services/",
    },
  ];

  return (
    <div className="hero-wrapper">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        speed={1000}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-img"
              style={{ backgroundImage: `url(${slide.img})` }}
              data-swiper-parallax="500"
            >
              {/* Dark overlay */}
              <div className="overlay"></div>

              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-7 col-md-9">
                    <div className="caption">
                      <h2 className="hero-title">{slide.title}</h2>
                      <h5 className="text">{slide.text}</h5>
                      <div className="custom-btn">
                        <a
                          href="/company-profile.pdf" // path relative to public folder
                          download="Graphic-Link-Company-Profile.pdf"
                          style={{ color: "inherit", textDecoration: "none" }}
                        >
                          Company Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
