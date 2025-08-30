import { BrowserRouter, Routes, Route, Outlet, useLocation, NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AOS from "aos";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./pages/Home";
import About from "./pages/About";
import HeroSlider from "./component/HeroSlider";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import { AOS_CONFIG } from "./data/constants";
import ScrollToTop from "./component/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* ✅ This ensures scroll resets on route change */}
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
          <Route path="projects" element={<Projects />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  const location = useLocation();

  useEffect(() => {
    AOS.init(AOS_CONFIG.global);
  }, []);

  return (
    <div>
      <Navbar />

      {/* Static logo on top-left */}
      <div className="logo-fixed d-none d-lg-block" {...AOS_CONFIG.zoom}>
        <img src="/images/logo/logo-white.svg" alt="Logo" />
      </div>

      {/* Floating Get Quote Button */}
      <NavLink to="/contact" className="get-quote-btn d-flex align-items-center gap-2">
        <i className="fas fa-file-import"></i> Get Quote
      </NavLink>

      {/* Page content goes here */}
      <main className="portfolio-wrap">
        <section className="ftco-section p-0">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={location.pathname}
              initial={location.pathname === "/" ? false : { opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </section>
      </main>

      <Footer />
    </div>
  );
}
