import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS
import "./Header.css";
import "./intro.css"; // Add the intro-specific CSS

const Header = ({ searchValue, setSearchValue, setCurrentSection }) => {
  const [showIntro, setShowIntro] = useState(true); // State for intro visibility

  // Automatically hide intro after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showIntro ? (
        <div className="intro-container">
          <div className="intro-content">
            <h1 className="intro-title">REEL RADAR</h1>
            <div className="intro-logo"></div>
          </div>
        </div>
      ) : (
        <header className="header">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
              <a
                className="navbar-brand"
                href="#"
                onClick={() => setCurrentSection("home")}
              >
                REEL RADAR
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
                      onClick={() => setCurrentSection("home")}
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
                      onClick={() => setCurrentSection("favorites")}
                    >
                      Favorites
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <input
            className="form-control search-input"
            type="text"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            placeholder="Search for movies..."
          />
        </header>
      )}
    </>
  );
};

export default Header;

