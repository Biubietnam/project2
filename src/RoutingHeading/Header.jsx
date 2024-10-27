import React, {useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
function Header() {

    const navigate = useNavigate();
    const url = process.env.PUBLIC_URL;
    const storelogo = url +'/img/storelogo.png'
    const backhome = () => {
        navigate("/")
    }

    return (
        <div className="container-fluid p-0">
            <header className="bg-info py-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-3 storediv">
                            <img src={storelogo} alt="Hudson Furnishings Log" className="img-fluid storelogo" onClick={backhome}/>
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
                                                <li><a className="dropdown-item" href="/livingroom">Living room</a></li>
                                                <li><a className="dropdown-item" href="/bedroom">Bedroom</a></li>
                                                <li><a className="dropdown-item" href="/diningroom">Dining room</a></li>
                                                <li><a className="dropdown-item" href="/outdoor">Outdoor</a></li>
                                                <li><a className="dropdown-item" href="/homeoffice">Home Office</a></li>

                                            </ul>
                                        </li>
                                        <li className="nav-item"><a className="nav-link" href="/gallery">Gallery</a></li>
                                        <li className="nav-item"><a className="nav-link" href="/about">About us</a></li>
                                        <li className="nav-item"><a className="nav-link" href="/contact">Contact Us</a></li>
                                        <li className="nav-item"><a className="nav-link" href="/faq">FAQ</a></li>
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
import React, {useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
function Header() {

    const navigate = useNavigate();
    const url = process.env.PUBLIC_URL;
    const storelogo = url +'/img/storelogo.png'
    const backhome = () => {
        navigate("/")
    }

    return (
        <div className="container-fluid p-0">
            <header className="bg-info py-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-3 storediv">
                            <img src={storelogo} alt="Hudson Furnishings Log" className="img-fluid storelogo" onClick={backhome}/>
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
                                                <li><a className="dropdown-item" href="/livingroom">Living room</a></li>
                                                <li><a className="dropdown-item" href="/bedroom">Bedroom</a></li>
                                                <li><a className="dropdown-item" href="/diningroom">Dining room</a></li>
                                                <li><a className="dropdown-item" href="/outdoor">Outdoor</a></li>
                                                <li><a className="dropdown-item" href="/homeoffice">Home Office</a></li>

                                            </ul>
                                        </li>
                                        <li className="nav-item"><a className="nav-link" href="/gallery">Gallery</a></li>
                                        <li className="nav-item"><a className="nav-link" href="/about">About us</a></li>
                                        <li className="nav-item"><a className="nav-link" href="/contact">Contact Us</a></li>
                                        <li className="nav-item"><a className="nav-link" href="/faq">FAQ</a></li>
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