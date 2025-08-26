import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../assets/css/Services.css";
import { SERVICES } from "../data/db";

export default function Services() {
  return (
    <div className="container service-section mt-5">
      <div className="row">
        {/* Static Left Column */}
        <div className="col-md-12 col-lg-3 mb-5 mb-lg-0 flex justify-content-between">
          <h2 className="mb-4 section-title">
            <span className="yellow-text">Explore</span> Our Wide Service Range
          </h2>
          <p>
            Our expert team in Abu Dhabi specializes in high-quality signage solutions, including
            commercial, indoor, outdoor, industrial, shop, and digital signage. We take a unique
            approach to deliver creative results our clients love.
          </p>
        </div>

        {/* Slider Column */}
        <div className="col-md-12 col-lg-9">
          <Swiper
            spaceBetween={20}
            slidesPerView={3.5}
            loop={true}
            autoplay={{ delay: 1000 }}
            breakpoints={{
              320: { slidesPerView: 1.5 },
              768: { slidesPerView: 2.5 },
              992: { slidesPerView: 3.5 },
            }}
          >
            {SERVICES.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="service-item text-white text-center">
                  <img src={service.img} className="service-thumbnail" alt={service.title} />
                  <div>
                    <h6>{service.title}</h6>
                    <p className="fs-7 text-secondary">{service.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
