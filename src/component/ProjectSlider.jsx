import React, { useEffect } from "react";
import AOS from "aos";

import { PROJECTS_DETAILS } from "../data/db";
import "../assets/css/ProjectSlider.css";
import { AOS_CONFIG } from "../data/constants";

export default function ProjectSlider() {
  useEffect(() => {
    AOS.init(AOS_CONFIG.global);

    let nextButton = document.getElementById("next");
    let prevButton = document.getElementById("prev");
    let carousel = document.querySelector(".carousel");
    let listHTML = document.querySelector(".carousel .list");

    nextButton.onclick = function () {
      showSlider("next");
    };
    prevButton.onclick = function () {
      showSlider("prev");
    };

    let unAcceppClick;
    const showSlider = (type) => {
      nextButton.style.pointerEvents = "none";
      prevButton.style.pointerEvents = "none";

      carousel.classList.remove("next", "prev");
      let items = document.querySelectorAll(".carousel .list .item");
      if (type === "next") {
        listHTML.appendChild(items[0]);
        carousel.classList.add("next");
      } else {
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add("prev");
      }
      clearTimeout(unAcceppClick);
      unAcceppClick = setTimeout(() => {
        nextButton.style.pointerEvents = "auto";
        prevButton.style.pointerEvents = "auto";
      }, 2000);
    };

    // Attach "More Details" button logic
    let seeMoreButtons = document.querySelectorAll(".seeMore");
    seeMoreButtons.forEach((button) => {
      button.onclick = function () {
        let item = button.closest(".item");
        item.classList.add("showDetail");
      };
    });

    // Attach "Back" button logic for each item
    let backButtons = document.querySelectorAll(".back");
    backButtons.forEach((button) => {
      button.onclick = function () {
        let item = button.closest(".item");
        item.classList.remove("showDetail");
      };
    });
  }, []);

  return (
    <div className={"text-white"}>
      <div className="carousel mt-3 " {...AOS_CONFIG.fade}>
        <div className="list">
          {PROJECTS_DETAILS.map((project) => (
            <div className="item" key={project.id}>
              <img src={project.image} alt={project.topic} />
              <div className="introduce">
                <span className="text-white-50 intro-title">{project.title}</span>
                <h3 className={"intro-topic"}>{project.topic}</h3>
                <p className="text-white-50 intro-desc me-1">{project.shortDesc}</p>
                <button
                  className="seeMore ms-0"
                  onClick={() => {
                    document.querySelector(".carousel").classList.remove("next", "prev");
                    document.querySelector(".carousel").classList.add("showDetail");
                  }}
                >
                  More Details &#8599;
                </button>
              </div>

              <div className="detail">
                <h3>{project.detailTitle}</h3>
                <p className="des text-white-50">{project.detailDesc}</p>
                <div className="specifications justify-content-end">
                  {project.specs.map((spec, i) => (
                    <div key={i}>
                      <p>{spec.label}</p>
                      <p>{spec.value}</p>
                    </div>
                  ))}
                </div>
                {/* Back button inside each detail */}
                <button
                  className={"back"}
                  onClick={() => {
                    document.querySelector(".carousel").classList.remove("showDetail");
                  }}
                >
                  Back
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Arrows */}
        <div className="arrows">
          <button id="prev">&lt;</button>
          <button id="next">&gt;</button>
        </div>
      </div>
    </div>
  );
}
