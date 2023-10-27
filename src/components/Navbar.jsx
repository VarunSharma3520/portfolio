import React from "react";

const Navbar = (props) => {
    return (
        <div className="Navbar  bg-light">
            <nav class="navbar-dark navbar" style={{backgroundColor: `${props.color}!important`}}>
                <a class="navbar-brand ms-4" href="#">
                    <img
                        src="https://avatars.githubusercontent.com/u/110775856?v=4"
                        alt="Logo"
                        width="30"
                        height="24"
                        class="rounded-circle d-inline-block align-text-top me-2 mt-1"
                    />VS
                </a>
                <div className="mt-2 d-flex justify-content-end">
                    <ul class="nav-item ">
                        <a class="nav-link active me-4" aria-current="page" href="#">
                            <b>About Me</b>
                        </a>
                    </ul>
                    <ul class="nav-item">
                        <a class="nav-link active me-4" aria-current="page" href="#">
                            <b>Skills</b>
                        </a>
                    </ul>
                    <ul class="nav-item">
                        <a class="nav-link active me-4" aria-current="page" href="#">
                            <b>Projects</b>
                        </a>
                    </ul>
                    <ul class="nav-item">
                        <a class="nav-link active me-4" aria-current="page" href="#">
                            <b>Experience</b>
                        </a>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
