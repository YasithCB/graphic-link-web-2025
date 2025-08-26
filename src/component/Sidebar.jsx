import { Link } from "react-scroll";
import "../assets/css/Sidebar.css";

export default function Sidebar() {
  return (
    <aside role="complementary" id="colorlib-aside" className="sidebar show d-none d-md-block">
      <Link to="/">
        <img src="/images/logo/logo-white.svg" height="100" alt="Graphic-link-logo" />
      </Link>

      <nav id="colorlib-main-menu" role="navigation" className="mt-4">
        <ul>
          <li className="colorlib-active">
            <Link to="home" smooth={true} duration={200}>
              Home
            </Link>
          </li>
          <li>
            <Link to="company" smooth={true} duration={200}>
              Company
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={200}>
              Services
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={200}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="faq" smooth={true} duration={200}>
              FAQ
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={200}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className="colorlib-footer">
        <p className="pfooter">
          Copyright &copy; {new Date().getFullYear()} All rights reserved <br /> by{" "}
          <a href="https://colorlib.com" target="_blank" rel="noreferrer">
            Yasith C Bandara
          </a>
        </p>
      </div>
    </aside>
  );
}
