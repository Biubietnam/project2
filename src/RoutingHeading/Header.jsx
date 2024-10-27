import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const url = process.env.PUBLIC_URL;
    const storelogo = url + '/img/storelogo.png';

    const backhome = () => {
        navigate("/");
    }

    return (
        <div className="container-fluid p-0">
            <header className="bg-info py-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-3 storediv">
                            <img src={storelogo} alt="Hudson Furnishings Logo" className="img-fluid storelogo" onClick={backhome}/>
                        </div>
                        <div className="col-md-9">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav ms-auto">
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                                                All furniture
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><Link className="dropdown-item" to="/livingroom">Living room</Link></li>
                                                <li><Link className="dropdown-item" to="/bedroom">Bedroom</Link></li>
                                                <li><Link className="dropdown-item" to="/diningroom">Dining room</Link></li>
                                                <li><Link className="dropdown-item" to="/outdoor">Outdoor</Link></li>
                                                <li><Link className="dropdown-item" to="/homeoffice">Home Office</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item"><Link className="nav-link" to="/gallery">Gallery</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to="/about">About us</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to="/faq">FAQ</Link></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
