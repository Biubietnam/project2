import React from 'react';
import { useNavigate } from 'react-router-dom';
const AboutUs = () => {
    const navigate = useNavigate()
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <h1 className="text-center mb-5">About Hudson Furnishings</h1>
          
          <p className="lead text-center mb-5">
            At Hudson Furnishings, we believe that every home deserves beautiful, high-quality furniture that tells a story.
          </p>
          
          <div className="row mb-5">
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <img 
                src="https://res.cloudinary.com/fortyfournorth/image/upload/v1629982148/The%20Look%20Company/Blogs/4.0_Design_Concept_room_for_retail-2_okntq3.jpg" 
                alt="Our showroom" 
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
              <h2 className="mb-3">Our Story</h2>
              <p>
                Hudson Furnishings began as a small shop in downtown Hudson. 
                Over the years, we've grown into a beloved destination for homeowners and interior designers alike, 
                known for our curated selection of timeless and contemporary pieces.
              </p>
            </div>
          </div>
          
          <div className="row mb-5">
            <div className="col-12 col-md-6 order-md-2 mb-4 mb-md-0">
              <img 
                src="/placeholder.svg?height=300&width=400" 
                alt="Our craftsmanship" 
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-12 col-md-6 order-md-1 d-flex flex-column justify-content-center">
              <h2 className="mb-3">Our Commitment</h2>
              <p>
                We're committed to offering furniture that's not just beautiful, but also sustainably crafted and built to last. 
                Our team works closely with skilled artisans and responsible manufacturers to ensure every piece meets our high standards.
              </p>
            </div>
          </div>
          
          <h2 className="text-center mb-4">Our Values</h2>
          <div className="row text-center">
            <div className="col-12 col-md-4 mb-4">
              <i className="bi bi-heart-fill text-primary fs-1 mb-3"></i>
              <h3>Quality</h3>
              <p>We never compromise on the quality of our furniture.</p>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <i className="bi bi-tree-fill text-primary fs-1 mb-3"></i>
              <h3>Sustainability</h3>
              <p>We're committed to environmentally responsible practices.</p>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <i className="bi bi-people-fill text-primary fs-1 mb-3"></i>
              <h3>Community</h3>
              <p>We believe in giving back to our local community.</p>
            </div>
          </div>
          
          <div className="text-center mt-5">
            <h2 className="mb-4">Visit Us Today</h2>
            <p>
              Experience the Hudson Furnishings difference at our showroom. 
              Our knowledgeable staff is ready to help you find the perfect pieces for your home.
            </p>
            <button className="btn btn-primary btn-lg mt-3" onClick={(ev) =>navigate("/contact")}>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;