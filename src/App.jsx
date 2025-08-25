import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Company from "./pages/Company";
import Sidebar from "./component/Sidebar";
import "./assets/css/MiniSidebar.css";
import MiniSidebar from "./component/MiniSidebar";
import Projects from "./pages/Projects";
import Services from "./pages/Services";

function Layout() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsSidebarVisible(false);
      return;
    } // skip for mobile

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
      {isSidebarVisible ? <Sidebar /> : <MiniSidebar />}

      {/* Main content */}
      <main className="main-content portfolio-wrap">
        <section className="ftco-section p-0">
          <div>
            <Home />
            <Company />
            <Services />
            <Projects />
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
