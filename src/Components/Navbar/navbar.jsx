import React, { useState, useEffect } from "react";
import { Link, scroller } from "react-scroll";
import "./navbar.css";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1100);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle dropdown navigation using react-scroll
  const handleDropdownChange = (e) => {
    const target = e.target.value;
    if (target) {
      scroller.scrollTo(target, {
        duration: 500,
        smooth: true,
        offset:
          target === "Hero"
            ? -260
            : target === "Programs"
            ? -200
            : target === "about"
            ? -100
            : target === "campus"
            ? -170
            : target === "testimonials"
            ? -120
            : target === "contact"
            ? -150
            : 0,
      });
    }
  };

  return (
    <nav className="container">
      <img
        src="https://greatstack.in/assets/logo-DUdXW4nF.png"
        className="logo1"
        alt="logo"
      />

      {!isMobile ? (
        <ul>
          <li>
            <Link to="hero" smooth={true} offset={-260} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="Programs" smooth={true} offset={-190} duration={500}>
              Program
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={-100} duration={500}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="campus" smooth={true} offset={-190} duration={500}>
              Campus
            </Link>
          </li>
          <li>
            <Link to="testimonials" smooth={true} offset={-160} duration={500}>
              Testimonials
            </Link>
          </li>
          <button className="btn">
            <li>
              <Link to="contact" smooth={true} offset={-240} duration={500}>
                Contact Us
              </Link>
            </li>
          </button>
        </ul>
      ) : (
        <div className="dropdown">
          <select onChange={handleDropdownChange}>
            <option value="hero">Home</option>
            <option value="Programs">Program</option>
            <option value="about">About Us</option>
            <option value="campus">Campus</option>
            <option value="testimonials">Testimonials</option>
            <option value="contact">Contact Us</option>
          </select>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
