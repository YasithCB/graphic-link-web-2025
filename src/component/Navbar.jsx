import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaSearch, FaTimes } from "react-icons/fa";

import "../assets/css/Navbar.css";

export default function Navbar() {
  const [isMobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="my-navbar">
      <div className="container-fluid flex items-center justify-between py-3">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img
              src="/images/logo/logo-white.svg"
              alt="Logo White"
              className="block dark:hidden h-12"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="menu flex gap-6 font-medium">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
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
              <Link to="/" onClick={() => setMobileOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMobileOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={() => setMobileOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={() => setMobileOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/careers" onClick={() => setMobileOpen(false)}>
                Careers
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMobileOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
