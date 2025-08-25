import "../assets/css/MiniSidebar.css";
import React from "react";
import { Link } from "react-scroll";

export default function MiniSidebar() {
  return (
    <aside className="mini-navbar d-none d-md-block">
      <nav className="mini-nav-links">
        <Link to="company" smooth={true} duration={200}>
          Company
        </Link>
        <Link to="services" smooth={true} duration={200}>
          Services
        </Link>
        <Link to="projects" smooth={true} duration={200}>
          Projects
        </Link>
        <Link to="news" smooth={true} duration={200}>
          News
        </Link>
        <Link to="faq" smooth={true} duration={200}>
          FAQ
        </Link>
        <Link to="contact" smooth={true} duration={200}>
          Contact
        </Link>
        <Link to="home" smooth={true} duration={200}>
          Home
        </Link>
      </nav>
    </aside>
  );
}
