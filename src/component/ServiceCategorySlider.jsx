import React, { useState, useEffect, useRef } from "react";
import "../assets/css/ServiceCategorySlider.css";

const imageData = [
  {
    title: "Offset Printing",
    description:
      "High-quality large volume printing for brochures, catalogs, and packaging materials.",
    src: "images/services/mountain-landscape.jpg",
  },
  {
    title: "Digital Printing",
    description:
      "Fast, affordable, and customizable prints for flyers, business cards, and posters.",
    src: "images/services/forest-path.jpg",
  },
  {
    title: "Events & Exhibition",
    description:
      "Creative displays, backdrops, and exhibition materials that captivate your audience.",
    src: "images/services/serene-water-mirroring.jpg",
  },
  {
    title: "Sign Boards",
    description: "Durable indoor and outdoor signage to highlight your brand effectively.",
    src: "images/services/ocean-sunset-golden-hour.jpg",
  },
  {
    title: "Gift Items",
    description: "Personalized corporate and promotional gifts to leave a lasting impression.",
    src: "images/services/rolling-sand-dunes.jpg",
  },
];

export default function ServiceCategorySlider() {
  const [currentIndex, setCurrentIndex] = useState(3);
  const [isPlaying, setIsPlaying] = useState(true);
  const autoplayRef = useRef(null);
  const containerRef = useRef(null);

  // Handle autoplay
  useEffect(() => {
    if (isPlaying) {
      autoplayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % imageData.length);
      }, 4000);
    }
    return () => clearInterval(autoplayRef.current);
  }, [isPlaying]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };
    const container = containerRef.current;
    container?.addEventListener("keydown", handleKey);
    return () => container?.removeEventListener("keydown", handleKey);
  }, []);

  const navigate = (dir) => {
    setCurrentIndex((prev) => {
      let next = prev + dir;
      if (next < 0) return imageData.length - 1;
      if (next >= imageData.length) return 0;
      return next;
    });
    stopAutoplay();
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
    stopAutoplay();
  };

  const stopAutoplay = () => setIsPlaying(false);
  const toggleAutoplay = () => setIsPlaying((prev) => !prev);

  return (
    <section className="service-category-section container">
      <div className="coverflow-wrapper">
        <div className="title text-center text-white">
          <h2 className={"mb-5"}>
            <span className="yellow-text">Explore</span> Our Wide Service Range
          </h2>
        </div>

        <div className="info col-12 col-md-3 text-left">
          <h2>{imageData[currentIndex].title}</h2>
          <p>{imageData[currentIndex].description}</p>
        </div>

        <div className="coverflow-container col-12 col-md-9" tabIndex={0} ref={containerRef}>
          <div className="coverflow">
            {imageData.map((img, index) => {
              let offset = index - currentIndex;
              if (offset > imageData.length / 2) offset -= imageData.length;
              if (offset < -imageData.length / 2) offset += imageData.length;

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
            {imageData.map((_, index) => (
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
      </div>
    </section>
  );
}
