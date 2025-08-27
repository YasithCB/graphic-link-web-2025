import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../assets/css/HeroSlider.css";
import React from "react";

export default function HeroSlider() {
  const slides = [
    {
      img: "https://i.pinimg.com/736x/8a/02/ee/8a02ee921252ad4caa3695a7afb667d0.jpg",
      title: "Welcome to Graphic Link",
      text: "When we say we’re not happy until you’re happy, we really do mean it. So whether it’s a typo or an image that didn’t print quite the way you hoped, we’ll do everything we can to fix it. We love great design and believe it can work wonders for every business. That’s why we make it simple to create beautiful, expertly crafted business stationery.",
      link: "",
    },
    {
      img: "https://i.pinimg.com/1200x/4b/e4/01/4be4014262e1dfa0a5890b9eafa3a035.jpg",
      title: "Wide range of Printing Services",
      text: "From design to delivery, we offer a complete range of printing services, ensuring you receive a seamless and hassle-free experience.",
      link: "#",
    },
    {
      img: "https://i.pinimg.com/736x/fe/5b/c4/fe5bc419fc7138a7dc78c704bb70a741.jpg",
      title: "Branding & Promotion Products",
      text: "If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.",
      link: "http://obelisk.themescamp.com/services/",
    },
    {
      img: "https://i.pinimg.com/736x/92/37/57/9237571b53539475bfb204f7da06087a.jpg",
      title: "Large Format Printing",
      text: "AVM Printing has proven its expertise as a leading printing press in the UAE for digital print solutions.",
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
                      <h2 className="main-title">{slide.title}</h2>
                      <p className="text">{slide.text}</p>
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
