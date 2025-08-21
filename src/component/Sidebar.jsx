import { Link } from "react-router-dom";
import "/public/css/Sidebar.css";

export default function Sidebar() {
  return (
    <aside role="complementary">
      <Link to="/">
        <img src="/images/logo/logo-white.svg" height="120" alt="Graphic-link-logo" />
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
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

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
          Copyright &copy; {new Date().getFullYear()} All rights reserved <br /> by{" "}
          <a href="https://colorlib.com" target="_blank" rel="noreferrer">
            Yasith C Bandara
          </a>
        </p>
      </div>
    </aside>
  );
}
