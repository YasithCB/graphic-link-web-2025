// HeroSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../assets/css/HeroSlider.css";

export default function HeroSlider() {
  const slides = [
    {
      img: "https://avmforprinting.ae/wp-content/uploads/2025/05/digital-priniting_367726020_S.jpg",
      title: "Welcome AVM Printing",
      text: "We understand the importance of deadlines and strive to complete all projects efficiently without compromising on quality.",
      link: "http://obelisk.themescamp.com/services/",
    },
    {
      img: "https://avmforprinting.ae/wp-content/uploads/2025/05/Gift005-scaled-1.jpg",
      title: "Wide range of Printing Services",
      text: "From design to delivery, we offer a complete range of printing services, ensuring you receive a seamless and hassle-free experience.",
      link: "#",
    },
    {
      img: "https://avmforprinting.ae/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-15-at-10.29.34_838bf15c.jpg",
      title: "Branding & Promotion Products",
      text: "If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.",
      link: "http://obelisk.themescamp.com/services/",
    },
    {
      img: "https://avmforprinting.ae/wp-content/uploads/2025/05/Wall-Sticker-1024x576-2.jpg",
      title: "Large Format Printing",
      text: "AVM Printing has proven its expertise as a leading printing press in the UAE for digital print solutions.",
      link: "http://obelisk.themescamp.com/services/",
    },
  ];

  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation, Parallax]}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation
      loop={true}
      speed={1000}
      parallax={true}
      className="hero-swiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="bg-img"
            style={{ backgroundImage: `url(${slide.img})` }}
            data-swiper-parallax="500"
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-7 col-md-9">
                  <div className="caption">
                    <h2 className="main-title">{slide.title}</h2>
                    <p className="text">{slide.text}</p>
                    <a href={slide.link} className="obelisk-button style-4 drk mt-30">
                      Discover more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
