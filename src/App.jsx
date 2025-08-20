import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Home from "./Pages/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function LandingPage() {
  return (
    <div id="colorlib-page">
      {/*nav*/}
      <aside id="colorlib-aside" role="complementary" className="js-fullheight">
        <Link to="/">
          <img src="/images/logo/logo-white.svg" height="120" alt="Graphic-link-logo" />
        </Link>

        <nav id="colorlib-main-menu" role="navigation" className={"mt-4"}>
          <ul>
            <li className="colorlib-active">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/company">Company</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/*footer*/}
        <div className="colorlib-footer">
          <div className="mb-4">
            <h3>Subscribe for newsletter</h3>
            <form action="#" className="colorlib-subscribe-form">
              <div className="form-group d-flex">
                <div className="icon">
                  <span className="icon-paper-plane"></span>
                </div>
                <input type="text" className="form-control" placeholder="Enter Email Address" />
              </div>
            </form>
          </div>
          <p className="pfooter">
            Copyright &copy;
            <script>document.write(new Date().getFullYear());</script>
            All rights reserved <br /> by{" "}
            <a href="https://colorlib.com" target="_blank">
              Yasith C Bandara
            </a>
          </p>
        </div>
      </aside>

      <div id="colorlib-main">
        <section className="ftco-section p-0">
          <div className="container p-0">
            <Home />
          </div>
        </section>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
