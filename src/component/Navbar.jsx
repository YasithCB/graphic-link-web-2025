import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTimes,
  FaTiktok,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "../assets/css/Navbar.css";

export default function Navbar() {
  const [isMobileOpen, setMobileOpen] = useState(false);

  const linkClass = ({ isActive }) => (isActive ? "active-nav-item" : "hover:text-blue-400");

  return (
    <nav className="my-navbar-full">
      {/* 🔹 Top Info Strip */}
      <div className="bg-yellow secondary-text text-sm py-2 d-none d-lg-block justify-content-center">
        <div className="container d-flex justify-content-center gap-5 fs-7">
          <span className="d-flex align-items-center gap-2">
            <FaPhone />{" "}
            <a className="text-secondary-emphasis" href="tel:+971506302270">
              +971 50 630 2270
            </a>
          </span>
          <span className="d-flex align-items-center gap-2">
            <FaEnvelope />{" "}
            <a className="text-secondary-emphasis" href="mailto:info@graphiclink.com">
              info@graphiclink.ae
            </a>
          </span>
          <span className="d-flex align-items-center gap-2">
            <FaGlobe /> www.graphiclink.ae
          </span>
          <span className="d-flex align-items-center gap-2">
            <FaMapMarkerAlt /> Abu Dhabi, UAE
          </span>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <div className="container-fluid my-navbar-main flex items-center justify-between py-3 px-4 fs-7">
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="menu flex gap-6 font-medium">
            <li>
              <NavLink to="/" className={linkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={linkClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={linkClass}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={linkClass}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/careers" className={linkClass}>
                Careers
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={linkClass}>
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Social Icons */}
          <ul className="icons flex gap-4 text-lg">
            <li>
              <a
                href="https://www.tiktok.com/@graphic_link_?_t=ZS-8ytyCkL0qEz&_r=1"
                target="_blank"
              >
                <FaTiktok />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/share/1AXtVazcoy/" target="_blank">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/graphic_link1?igsh=bnVzNHV6ZmhkcmQ0"
                target="_blank"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setMobileOpen(!isMobileOpen)}>
          ☰
        </button>
      </div>

      {/* 🔹 Mobile Menu */}
      {isMobileOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col z-50 text-white text-xl">
          <button className="absolute top-6 right-6" onClick={() => setMobileOpen(false)}>
            <FaTimes size={28} />
          </button>

          <ul className="flex flex-col gap-6">
            <li>
              <NavLink to="/" className={linkClass} onClick={() => setMobileOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={linkClass} onClick={() => setMobileOpen(false)}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={linkClass} onClick={() => setMobileOpen(false)}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={linkClass} onClick={() => setMobileOpen(false)}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/careers" className={linkClass} onClick={() => setMobileOpen(false)}>
                Careers
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={linkClass} onClick={() => setMobileOpen(false)}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
