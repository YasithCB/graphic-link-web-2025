import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "../assets/css/Footer.css";

export default function Footer() {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        {/*Contact Us*/}
        <div className="footer-column">
          {/* Title on top */}
          <h2 className="yellow-text mb-4">Contact Us</h2>

          {/* Icon + Text in row */}
          <div className="row items-start gap-3">
            {/* Icon column */}
            <div className="col-1 text-white">
              <i className="fas fa-map-marker-alt fs-4"></i>
            </div>

            {/* Text column */}
            <div className="col-8">
              <h5 className="m-0">Official Address</h5>
              <p className="text-white-50">M40, Abu Dhabi - UAE</p>
            </div>
          </div>
        </div>

        {/* Get In Touch */}
        <div className="footer-column">
          {/* Title */}
          <h2 className="yellow-text mb-4">Get In Touch</h2>

          {/* Email row */}
          <div className="row mb-3 gap-3">
            <div className="col-1 text-white text-2xl">
              <i className="fas fa-envelope fs-4"></i>
            </div>
            <div className="col-8">
              <h5 className="m-0">Email Us</h5>
              <p className="text-white-50">graphiclink@gmail.com</p>
            </div>
          </div>

          {/* Phone row */}
          <div className="row mb-3 gap-3">
            <div className="col-1 text-white text-2xl">
              <i className="fas fa-phone fs-4"></i>
            </div>
            <div className="col-8">
              <h5 className="m-0">Call Us</h5>
              <p className="text-white-50">+971 50 767 4073</p>
            </div>
          </div>
        </div>

        {/*About Us*/}
        <div className="footer-column">
          <h2 className="yellow-text">About Us</h2>
          <p className="fs-7">
            Your trusted partner for premium signage in the UAE. We specialize in 3D aluminum,
            stainless steel, flash, channelium, acrylic letters, neon signs, brass signs, UV
            printing, sticker printing, powder coating, etching, colour filing, gold plating,
            electroplating, and LED transformer installation indoor and outdoor, Back Drops, Vehicle
            Branding Let us know how we can bring your brand to life."
          </p>
          <p className="text-white-50">© 2025 Graphic Link. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
