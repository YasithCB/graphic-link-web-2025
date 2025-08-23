import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Company from "./pages/Company";
import Sidebar from "./component/Sidebar";
import "./assets/css/MiniSidebar.css";
import ProjectSlider from "./component/ProjectSlider";

function Layout() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 100) {
        setIsSidebarVisible(false);
      } else {
        setIsSidebarVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`layout ${isSidebarVisible ? "with-sidebar" : "full-width"}`}>
      {/* Sidebar or Mini Navbar */}
      {isSidebarVisible ? (
        <aside id="colorlib-aside" className="sidebar show">
          <Sidebar />
        </aside>
      ) : (
        <aside className="mini-navbar">
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
      )}

      {/* Main content */}
      <main className="main-content">
        <section className="ftco-section p-0">
          <div>
            <Home />
            <Company />
            <ProjectSlider />
          </div>
        </section>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}
