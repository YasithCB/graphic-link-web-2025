import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/css/services/ServiceCategorySlider.css";
import { MAIN_SERVICES } from "../data/db";
import { AOS_CONFIG } from "../data/constants";

export default function ServiceCategorySlider() {
  const [isPlaying, setIsPlaying] = useState(true);
  const autoplayRef = useRef(null);
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(3);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    AOS.init(AOS_CONFIG.global);
  }, []);

  // Handle autoplay
  useEffect(() => {
    if (isPlaying) {
      autoplayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % MAIN_SERVICES.length);
      }, 2000);
    }
    return () => clearInterval(autoplayRef.current);
  }, [isPlaying]);

  const navigate = (dir) => {
    setCurrentIndex((prev) => {
      let next = prev + dir;
      if (next < 0) return MAIN_SERVICES.length - 1;
      if (next >= MAIN_SERVICES.length) return 0;
      return next;
    });
    stopAutoplay();
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
    setSelectedIndex(index); // 👈 store clicked index

    stopAutoplay();
  };

  const stopAutoplay = () => setIsPlaying(false);
  const toggleAutoplay = () => setIsPlaying((prev) => !prev);

  return (
    <section className="service-category-section container">
      <div className="coverflow-wrapper">
        <div {...AOS_CONFIG.fade} className="title text-center text-white">
          <h2>
            <span className="yellow-text">Explore</span> Our Wide Service Range
          </h2>
          <p className="mb-3">
            Signage solutions for all.... We have an expert team of Signage making in Abu Dhabi to
            create high-quality work. We use our unique approach to produce work that our clients
            love. We are experts in commercial signage, indoor signage, outdoor signage, industrial
            signage, shop signage, and digital signage in Abu Dhabi.
          </p>
        </div>

        <div
          className="coverflow-container col-12 col-md-10"
          tabIndex={0}
          ref={containerRef}
          {...AOS_CONFIG.zoom}
        >
          <div className="coverflow">
            {MAIN_SERVICES.map((img, index) => {
              let offset = index - currentIndex;
              if (offset > MAIN_SERVICES.length / 2) offset -= MAIN_SERVICES.length;
              if (offset < -MAIN_SERVICES.length / 2) offset += MAIN_SERVICES.length;

              const abs = Math.abs(offset);
              const sign = Math.sign(offset);

              let translateX = offset * 220;
              let translateZ = -abs * 200;
              let rotateY = -sign * Math.min(abs * 60, 60);
              let opacity = abs > 3 ? 0 : 1 - abs * 0.2;
              let scale = 1 - abs * 0.1;

              return (
                <div
                  key={index}
                  className={`coverflow-item ${index === currentIndex ? "active" : ""}`}
                  style={{
                    transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                    opacity,
                    zIndex: 100 - abs,
                  }}
                  onClick={() => goToIndex(index)}
                >
                  <div className="cover">
                    <img src={img.src} alt={img.title} loading="lazy" />
                  </div>
                  <div
                    className="reflection"
                    style={{
                      backgroundImage: `url(${img.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </div>
              );
            })}
          </div>

          <button className="nav-button prev" onClick={() => navigate(-1)}>
            ‹
          </button>
          <button className="nav-button next" onClick={() => navigate(1)}>
            ›
          </button>

          <div className="dots-container">
            {MAIN_SERVICES.map((_, index) => (
              <div
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => goToIndex(index)}
              />
            ))}
          </div>

          <button className="play-pause-button" onClick={toggleAutoplay}>
            {isPlaying ? (
              <span className="pause-icon">❚❚</span>
            ) : (
              <span className="play-icon">▶</span>
            )}
          </button>
        </div>

        {/* 👇 Extra section only when item clicked */}
        {selectedIndex !== null && isPlaying === false && (
          <div className="details-container col-12 col-md-2">
            <div className="extra-images mt-4">
              <div className="d-flex flex-column align-items-end gap-3">
                {MAIN_SERVICES[selectedIndex]?.subImages?.map((img, idx) => (
                  <img key={idx} src={img} alt={`extra-${idx}`} className="extra-thumb" />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
