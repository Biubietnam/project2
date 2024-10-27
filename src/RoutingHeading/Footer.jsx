import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  const url = process.env.PUBLIC_URL;
  const [dateTime, setDateTime] = useState(new Date());
  const [location, setLocation] = useState({ lat: null, long: null });

  useEffect(() => {

    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);


    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude.toFixed(2),
          long: position.coords.longitude.toFixed(2),
        });
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-4 mb-3 mb-md-0">
            <h5>Site Map</h5>
            <ul className="list-unstyled">
              <li><a href="/project2" className="text-white">Home</a></li>
              <li><a href="/project2/gallery" className="text-white">Gallery</a></li>
              <li><a href="/project2/contact" className="text-white">Contact Us</a></li>
              <li><a href="/project2/faq" className="text-white">FAQ</a></li>
              <li className="dropdown">
                <a href="/" className="text-white dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Products
                </a>
                <ul className="dropdown-menu">
                  <li><a href="/project2/livingroom" className="dropdown-item">Living Room</a></li>
                  <li><a href="/project2/bedroom" className="dropdown-item">Bedroom</a></li>
                  <li><a href="/project2/homeoffice" className="dropdown-item">Home Office</a></li>
                  <li><a href="/project2/outdoor" className="dropdown-item">Outdoor</a></li>
                  <li><a href="/project2/diningroom" className="dropdown-item">Dining Room</a></li>
                </ul>
              </li>
              <li><a href="/project2/about" className="text-white">About us</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h5>Contact us</h5>
            <p>Email: info@hudsonfurnishings.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 Furniture St, City, State 12345</p>
          </div>
          <div className="col-md-4">
            <h5>Follow us</h5>
            <div className="d-flex">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <i className="bi bi-facebook"></i> FACEBOOK
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <i className="bi bi-instagram"></i> INSTAGRAM
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <i className="bi bi-youtube"></i> YOUTUBE
              </a>


            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="ticker-wrapper bg-info overflow-hidden">
              <ul className="ticker-content list-unstyled d-flex mb-0">
                {[...Array(3)].map((_, index) => (
                  <li key={index} className="ticker-item flex-shrink-0 px-3">
                    {dateTime.toLocaleString()} | Location: {location.lat}, {location.long}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/H8_W_MMej00"
                title="The best IKEA store so far? Cosy tour | New in, outdoor furniture, showrooms &amp; market hall"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .ticker-wrapper {
          height: 40px;
        }
        .ticker-content {
          animation: ticker 20s linear infinite;
          white-space: nowrap;
        }
        .ticker-item {
          display: inline-block;
          padding: 10px 20px;
        }
        @keyframes ticker {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;