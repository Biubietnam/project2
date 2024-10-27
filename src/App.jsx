import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './page/Homepage';
import './App.css';
import Header from './RoutingHeading/Header'
import LivingRoom from './page/LivingRoom';
import Footer from './RoutingHeading/Footer'
import ContactUs from './page/Contact';
import Outdoor from './page/OutDoor';
import BedRoom from './page/Bedroom'
import VisibilityIcon from '@mui/icons-material/Visibility';
import React, { useEffect, useRef, useState } from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Homeoffice from './page/Homeoffice';
import DiningRoom from './page/Diningroom';
import AboutUs from './page/AboutUs'
import FaqPage from './page/FAQ'
import Gallery from './page/gallery';
function App() {
  const [visitCount, setVisitCount] = useState(0);
  const hasVisited = useRef(false);
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    // Prevent running twice in Strict Mode
    if (hasVisited.current) return;
    hasVisited.current = true;

    // Update and store visit count in localStorage
    if (localStorage.getItem('visitCount')) {
      let count = parseInt(localStorage.getItem('visitCount'));
      count += 1;
      localStorage.setItem('visitCount', count);
      setVisitCount(count);
    } else {
      localStorage.setItem('visitCount', 1);
      setVisitCount(1);
    }

  }, []);

  useEffect(() => {
    // Handle scroll event to determine when to show the button
    const handleScroll = () => {
      if (window.scrollY > 500) { // Show button after scrolling down 500px
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/home' element={<Homepage />} />
          <Route path='/livingroom' element={<LivingRoom />}/>
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/outdoor' element={<Outdoor />} />
          <Route path='/bedroom' element={<BedRoom />} />
          <Route path='/homeoffice' element={<Homeoffice/>}/>
          <Route path='/diningroom' element={<DiningRoom/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/faq' element={<FaqPage/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
        </Routes>
        <Footer />
        <div id="counter" className='counter'>
          <VisibilityIcon style={{ fontSize: '1.2em' }} /> {visitCount}
        </div>
        <>
          {showButton && ( // Conditionally render the button based on showButton state
            <button
            className='scrollup'
              onClick={scrollToTop}
              style={styles.backToTopBtn}>
              <ArrowDropUpIcon />  {/* Icon for the button */}

            </button>
          )}
        </>
      </div>
    </Router>
  );
}
const styles = {
  backToTopBtn: {
    position: 'fixed ',
    bottom: '50px',
    right: '30px',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '18px',
    border: '1px solid gray',
    zIndex: 1000,
  }
};
export default App;
