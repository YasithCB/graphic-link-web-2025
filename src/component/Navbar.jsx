import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaTimes } from "react-icons/fa";

import "../assets/css/Navbar.css";

export default function Navbar() {
  const [isMobileOpen, setMobileOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "active-nav-item" // active link style
      : "hover:text-blue-400"; // normal hover style

  return (
    <nav className="my-navbar">
      <div className="container-fluid flex items-center justify-between py-3">
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
              <a href="#">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#">
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

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50 text-white text-xl">
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
