import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../assets/css/home/HeroSlider.css";
import React, { useCallback, useEffect, useState } from "react";

// Constants
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
const TYPING_SPEED = 80;
const ERASING_SPEED = 30;
const PAUSE_DURATION = 2000;
const WORDS = ["WELCOME TO", "GRAPHIC LINK"];

export default function HeroSlider() {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Optimize typing effect
  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText((prev) => prev + WORDS[wordIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setWordIndex((prev) => (prev + 1) % WORDS.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex]);

  useEffect(() => {
    const timeout = setTimeout(handleTyping, isTyping ? TYPING_SPEED : ERASING_SPEED);
    return () => clearTimeout(timeout);
  }, [handleTyping]);

  return (
    <div className="hero-wrapper">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        speed={1000}
        onSlideChange={(swiper) => {
          // Reset delay for slides after first
          if (swiper.realIndex !== 0) {
            swiper.params.autoplay.delay = 4000;
          } else {
            swiper.params.autoplay.delay = 12000;
          }
        }}
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
                      <h2 className="hero-title d-block">
                        {index === 0 ? text : slide.title}
                        {index === 0 && <span className="blinking-cursor"></span>}
                      </h2>

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
