import "../assets/css/Sidebar.css";
import React from "react";

export default function MiniSidebar() {
  return (
    <aside className="mini-navbar d-none d-md-block">
      <nav className="mini-nav-links">
        <a href="#home">Home</a>
        <a href="#">Company</a>
        <a href="#">Services</a>
        <a href="#">Projects</a>
        <a href="#">News</a>
        <a href="#">FAQ</a>
        <a href="#contact">Contact</a>
      </nav>
    </aside>
  );
}
