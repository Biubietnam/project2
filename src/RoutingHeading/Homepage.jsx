// import storelogo from '../img/storelogo.png'

import React from 'react';
function Homepage() {

    const url = process.env.PUBLIC_URL;
    const LivingRoom = url + '/img/livingroom.jpg'
    const Office = url + '/img/homeoffice.png'
    const DiningRoom = url + '/img/diningroom.png'
    const BedRoom = url + "/img/bedroom.jpg"
    const Outdoor = url + "/img/outdoor.png"

    return (
        <div className="container-fluid p-0">

            {/* Carousel */}
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner img-container">
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
                        <img src={LivingRoom} className="d-block w-100" alt="Fresh" />
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
                    <div className="col-md-9 selection">
                        <div className="card">
                            <img src={LivingRoom} className="card-img-top" alt="Livingroom" />
                            <div className="card-body">
                                <h5 className="card-title">Livingroom</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 selection" >
                        <div className="card">
                            <img src={Office} className="card-img-top" alt="Homeoffice" />
                            <div className="card-body">
                                <h5 className="card-title">Homeoffice</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 selection">
                        <div className="card">
                            <img src={Outdoor} className="card-img-top" alt="Outdoor" />
                            <div className="card-body">
                                <h5 className="card-title">Outdoor</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 selection">
                        <div className="card">
                            <img src={DiningRoom} className="card-img-top" alt="Diningroom" />
                            <div className="card-body">
                                <h5 className="card-title">Diningroom</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 selection">
                        <div className="card">
                            <img src={BedRoom} className="card-img-top" alt="Bedroom" />
                            <div className="card-body">
                                <h5 className="card-title">Bedroom</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Time and Location */}
        </div>
    );
}

export default Homepage;
