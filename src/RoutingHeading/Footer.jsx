import React,{ useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Footer() {

    const navigate = useNavigate();
    const url = process.env.PUBLIC_URL;
    const [dateTime, setDateTime] = useState(new Date());
    const [location, setLocation] = useState({ lat: null, long: null });
  
    useEffect(() => {
      // Update time every second
      const interval = setInterval(() => {
        setDateTime(new Date());
      }, 1000);
  
      // Get user's location using Geolocation API
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setLocation({
            lat: position.coords.latitude,
            long: position.coords.longitude,
          });
        });
      } else {
        alert('Geolocation is not supported by this browser.');
      }
  
      return () => clearInterval(interval);
    }, []);
  
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
                        {dateTime.toLocaleString()} | Location: {location.lat}, {location.long}
                        </div>
                    </div>
                </div>
                <iframe width="1252" height="704" src="https://www.youtube.com/embed/H8_W_MMej00" title="The best IKEA store so far? Cosy tour | New in, outdoor furniture, showrooms &amp; market hall" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </footer>

        </div>
    );
}

export default Footer;