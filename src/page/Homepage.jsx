

import React from 'react';
import { useNavigate } from 'react-router-dom';
function Homepage() {
    const url = process.env.PUBLIC_URL;
    const LivingRoom = url + '/img/livingroom.jpg'
    const Office = url + '/img/homeoffice.png'
    const DiningRoom = url + '/img/diningroom.png'
    const BedRoom = url + "/img/bedroom.jpg"
    const Outdoor = url + "/img/outdoor.png"
    const navigate = useNavigate();
    const tolivingpage= (toweb)=> {
        navigate("/project2/"+toweb)
    }
    return (
        <div className="container-fluid p-0">

            {/* Carousel */}
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner img-container">
                    <div className="carousel-item active">
                        <img src="https://media.architecturaldigest.com/photos/5c50a83892ce212ce3f5165c/2:1/w_1280,c_limit/CS_24_012419_0022.jpg" className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.livingdesignsfurniture.com/wp-content/uploads/2024/02/ldf-showroom-1.webp" className="d-block w-100"  />
                    </div>
                    <div className="carousel-item">
                        <img src="https://res.cloudinary.com/fortyfournorth/image/upload/v1629982148/The%20Look%20Company/Blogs/4.0_Design_Concept_room_for_retail-2_okntq3.jpg" className="d-block w-100" />
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
                <div className="col-md-9 selection" onClick={() => tolivingpage("livingroom")}>
                        <div className="card">
                            <img src={LivingRoom} className="card-img-top" alt="Livingroom" draggable="false" />
                            <div className="card-body">
                                <h5 className="card-title">Living Room</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 selection" >
                        <div className="card">
                            <img src={Office} className="card-img-top" alt="Homeoffice" onClick={() => tolivingpage("homeoffice")}/>
                            <div className="card-body">
                                <h5 className="card-title">Home Office</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 selection">
                        <div className="card">
                            <img src={Outdoor} className="card-img-top" alt="Outdoor" onClick={() => tolivingpage("outdoor")}/>
                            <div className="card-body">
                                <h5 className="card-title">Outdoor</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 selection">
                        <div className="card">
                            <img src={DiningRoom} className="card-img-top" alt="Diningroom" onClick={() => tolivingpage("diningroom")}/>
                            <div className="card-body">
                                <h5 className="card-title">Dining room</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 selection">
                        <div className="card">
                            <img src={BedRoom} className="card-img-top" alt="Bedroom" onClick={() => tolivingpage("bedroom")}/>
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
