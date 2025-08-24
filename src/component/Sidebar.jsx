import { Link } from "react-router-dom";
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
            <Link to="/FAQ">FAQ</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
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
