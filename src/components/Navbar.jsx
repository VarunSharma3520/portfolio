import React from "react";
import { SiGmail } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../index.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container-fluid">
          <Link className="navbar-brand ms-4" to="/">
            <img
              src="https://res.cloudinary.com/dlfuvp7oc/image/upload/v1705546638/djsieqzgrp4irrfphs0l.png"
              alt="Logo"
              width="30"
              height="24"
              className="rounded-circle d-inline-block align-text-top me-2 mt-1"
            />
            VS
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active me-4" aria-current="page" to="/Skill#">
                  <b>Skills</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active me-4" aria-current="page" to="/Project">
                  <b>Projects</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active me-4" aria-current="page" to="/Exp">
                  <b>Experience</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active me-4" aria-current="page" to="/Education">
                  <b>Education</b>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active me-4 contact-icon" href="mailto:sv279508@gmail.com">
                  <SiGmail />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active me-4 contact-icon" href="https://github.com/VarunSharma" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active me-4 contact-icon" href="https://www.linkedin.com/in/varun3520" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

