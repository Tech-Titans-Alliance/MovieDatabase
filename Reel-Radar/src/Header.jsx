import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS
import "./header.css"; // Import the custom header CSS
import "./intro.css"; // Intro-specific styling

const App = () => {
  const [searchValue, setSearchValue] = useState(""); // State for search box
  const [showIntro, setShowIntro] = useState(true); // State to manage intro visibility

  // Hide intro after 5 seconds
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
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      )}
    </>
  );
};

const Header = ({ searchValue, setSearchValue }) => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
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
                <a className="nav-link active" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#favorites">
                  Favorites
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Genre
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#action">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#comedy">
                      Comedy
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#drama">
                      Drama
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#horror">
                      Horror
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#romance">
                      Romance
                    </a>
                  </li>
                </ul>
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
  );
};

export default App;
