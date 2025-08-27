import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/css/MiniSidebar.css";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import HeroSlider from "./component/HeroSlider";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Footer from "./component/Footer";

function Layout() {
  return (
    <div>
      {/* Main content */}
      <main className="portfolio-wrap">
        <section className="ftco-section p-0">
          <div>
            <Navbar />
            <HeroSlider />
            <Home />
            <Footer />
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
