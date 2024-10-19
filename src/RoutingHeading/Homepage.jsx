import storelogo from '../img/storelogo.png'
import LivingRoom from '../img/LivingRoom.png'
import Office from '../img/Office.jpg'
import React from 'react';
import { useNavigate } from 'react-router-dom';
function Homepage() {
    const navigate = useNavigate();


    const backhome = () => {
        navigate("/")
    }
    cons
    return (
        <div className="container-fluid p-0">
            {/* Header */}
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
                                                <li><a className="dropdown-item" href="#">Livingroom</a></li>
                                                <li><a className="dropdown-item" href="#">Bedroom</a></li>
                                                <li><a className="dropdown-item" href="#">Diningroom</a></li>
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

            {/* Carousel */}
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/placeholder.svg?height=300&width=1200" className="d-block w-100" alt="Upcoming Sale" />
                    </div>
                    <div className="carousel-item">
                        <img src="/placeholder.svg?height=300&width=1200" className="d-block w-100" alt="King Size" />
                    </div>
                    <div className="carousel-item">
                        <img src="/placeholder.svg?height=300&width=1200" className="d-block w-100" alt="New Arrivals" />
                    </div>
                    <div className="carousel-item">
                        <img src="/placeholder.svg?height=300&width=1200" className="d-block w-100" alt="Fresh" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Furniture Categories */}
            <div className="container my-5">
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="card">
                            <img src={LivingRoom} className="card-img-top" alt="Livingroom" />
                            <div className="card-body">
                                <h5 className="card-title">Livingroom</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                    <img src={Office} className="card-img-top" alt="Homeoffice" />
                            <div className="card-body">
                                <h5 className="card-title">Homeoffice</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src="/placeholder.svg?height=200&width=300" className="card-img-top" alt="Outdoor" />
                            <div className="card-body">
                                <h5 className="card-title">Outdoor</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src="/placeholder.svg?height=200&width=300" className="card-img-top" alt="Diningroom" />
                            <div className="card-body">
                                <h5 className="card-title">Diningroom</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src="/placeholder.svg?height=200&width=300" className="card-img-top" alt="Bedroom" />
                            <div className="card-body">
                                <h5 className="card-title">Bedroom</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <img src="/placeholder.svg?height=200&width=600" className="card-img-top" alt="Other furniture" />
                            <div className="card-body">
                                <h5 className="card-title">Other furniture</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-dark text-white py-4" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h5>Site Map</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-white">Home</a></li>
                                <li><a href="#" className="text-white">Gallery</a></li>
                                <li><a href="#" className="text-white">Contact Us</a></li>
                                <li><a href="#" className="text-white">FAQ</a></li>
                                <li><a href="#" className="text-white">Products</a></li>
                                <li><a href="#" className="text-white">About us</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5>Contact us</h5>
                            <p>Email: info@hudsonfurnishings.com</p>
                            <p>Phone: (123) 456-7890</p>
                            <p>Address: 123 Furniture St, City, State 12345</p>
                        </div>
                        <div className="col-md-4">
                            <h5>Follow us</h5>
                            <p>FACEBOOK INSTAGRAM YOUTUBE</p>
                        </div>
                        <div className="bg-info text-center py-2 timer">
                            <p className="mb-0">10/5/2024, 3:43:40 PM | Location: Vietnam</p>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Time and Location */}
        </div>
    );
}

export default Homepage;
