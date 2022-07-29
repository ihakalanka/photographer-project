import React from 'react';
import { Link } from "react-router-dom";

import Img1 from '../assets/logo.png';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg custom_nav-container ">
                <a className="navbar-brand" href="index.html">
                    <img src={Img1} alt="" />
                    <span>
                        Uliya
                    </span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                        <ul className="navbar-nav  ">
                            <li className="nav-item active">
                                <Link className="nav-link" to={"/"}>Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/about"}> About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/portfolio"}> Portfolio </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/contact"}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
