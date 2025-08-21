import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./Pages/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Company from "./pages/Company";
import Sidebar from "./component/Sidebar";

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
      <aside id="colorlib-aside" className={`sidebar ${isSidebarVisible ? "show" : "hide"}`}>
        {/* sidebar */}
        <Sidebar />
      </aside>

      <main className="main-content">
        <section className="ftco-section p-0">
          <div className="container p-0">
            <Home />
            <Company />
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
