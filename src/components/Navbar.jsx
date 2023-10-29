import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className='Navabar'>
            <nav className="bg-color-black navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="Navbar-opacity container-fluid">
                    <Link className="navbar-brand ms-4" to="/">
                        <img
                            src="https://avatars.githubusercontent.com/u/110775856?v=4"
                            alt="Logo"
                            width="30"
                            height="24"
                            className="rounded-circle d-inline-block align-text-top me-2 mt-1"
                        />VS
                    </Link>
                    <span className="navbar-text">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
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
                        </div>
                    </span>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
