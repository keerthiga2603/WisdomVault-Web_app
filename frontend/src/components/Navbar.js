import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.jpeg";

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <nav>
        <div className="nav-left">
          <img src={logo} alt="logo" />
          <span>WisdomVault</span>
        </div>

        <div className="nav-center">
          <Link to="/home">Home</Link>
          <Link to="/search">Search</Link>
          <Link to="/voice">Voices</Link>
          <Link to="/cultural">Culture</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Support</Link>
        </div>

        <div className="nav-right">
          <button onClick={() => navigate("/preview")}>
            Share Knowledge
          </button>
        </div>
      </nav>

      <div className="banner">
        ⚠️ History is not stored on this website.
        <span> Use our mobile app for a smoother experience</span>
        <button onClick={() => navigate("/download")}>
          Download App
        </button>
      </div>
    </>
  );
}

export default Navbar;