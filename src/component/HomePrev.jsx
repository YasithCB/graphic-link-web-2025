import React, { useState, useEffect, useCallback, memo } from "react";
import Spline from "@splinetool/react-spline";
import AOS from "aos";
import "../assets/css/main.css";

// Constants
const TYPING_SPEED = 110;
const ERASING_SPEED = 30;
const PAUSE_DURATION = 1000;
const WORDS = ["We Design. We Print. We Advertise.", "Your Brand, Our Creativity."];

const Home = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // AOS init
  useEffect(() => {
    const initAOS = () => {
      AOS.init({ once: true, offset: 10 });
    };
    initAOS();
    window.addEventListener("resize", initAOS);
    return () => window.removeEventListener("resize", initAOS);
  }, []);

  // Typing effect
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
    <div id={"home"} className="col-md-12">
      <div className="row no-gutters align-items-center">
        {/* Left side background */}
        <div className="main-img d-none d-md-flex img js-fullheight align-items-center justify-content-center">
          <img
            src="/images/home/open-profile-btn.svg"
            alt="Open PDF"
            className="open-profile-btn"
            onClick={() => window.open("/pdf-viewer.html", "_blank")}
          />
        </div>
        {/* Right side content */}
        <div className="main-title-col col-md-5 col-xxl-3">
          {/* 3D Robot */}
          <Spline
            className={"robot-3d"}
            scene="https://prod.spline.design/U9T-eKQSg7iiS1iZ/scene.splinecode"
          />

          <div className="main-text-container pt-5 mt-1 text pl-0 px-lg-3 pl-md-3 text-white">
            <div className="px-3 px-md-4">
              <div className="desc">
                <div className="top">
                  <h4 className="mb-2 fixed-text">
                    {text}
                    <span className="cursor">|</span>
                  </h4>
                </div>

                <div className="absolute">
                  <p className={"fs-7 me-3"}>
                    Creative UAE-based graphics and advertising company delivering impactful
                    designs, branding, printing, and marketing solutions to help businesses stand
                    out.
                  </p>
                </div>
                <p>
                  <a href="/single.html" className="custom-btn">
                    Explore Our Services
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Home);
