import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/css/MiniSidebar.css";
import Home from "./pages/Home";
import About from "./pages/About";
import HeroSlider from "./component/HeroSlider";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Services from "./pages/Services";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout wraps all routes */}
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <>
                <HeroSlider />
                <Home />
              </>
            }
          />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <div>
      <Navbar />

      {/* Static logo on top-left */}
      <div className="logo-fixed">
        <img src="/images/logo/logo-white.svg" alt="Logo" />
      </div>

      {/* Page content goes here */}
      <main className="portfolio-wrap">
        <section className="ftco-section p-0">
          <Outlet /> {/* This will render Home, About, etc */}
        </section>
      </main>

      <Footer />
    </div>
  );
}
