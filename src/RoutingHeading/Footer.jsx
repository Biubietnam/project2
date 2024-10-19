import React from 'react';
import { useNavigate } from 'react-router-dom';

function Footer() {

    const navigate = useNavigate();
    const url = process.env.PUBLIC_URL;

    return (
        <div className="container-fluid p-0">
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

        </div>
    );
}

export default Footer;