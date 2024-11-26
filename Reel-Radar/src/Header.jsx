import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS
import "./header.css"; // Import the custom header CSS

const Header = ({ searchValue, setSearchValue }) => {
  return (
    <header className="header">
      {/* Search Box */}
      <div className="container-fluid search-container py-3">
        <input
          className="form-control search-input"
          type="text"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          placeholder="Search for movies..."
        />
      </div>

      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          {/* Title or Brand */}
          <a className="navbar-brand" href="#">REEL RADAR</a>

          {/* Toggler for Mobile View */}
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

          {/* Nav Items */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {/* Home Link */}
              <li className="nav-item">
                <a className="nav-link active" href="#home">Home</a>
              </li>

              {/* Favorites Link */}
              <li className="nav-item">
                <a className="nav-link" href="#favorites">Favorites</a>
              </li>

              {/* Genre Dropdown */}
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
                  <li><a className="dropdown-item" href="#action">Action</a></li>
                  <li><a className="dropdown-item" href="#comedy">Comedy</a></li>
                  <li><a className="dropdown-item" href="#drama">Drama</a></li>
                  <li><a className="dropdown-item" href="#horror">Horror</a></li>
                  <li><a className="dropdown-item" href="#romance">Romance</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

