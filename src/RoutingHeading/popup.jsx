
import React, { useState, useEffect } from 'react';
import Ratings from './Rating'
function PopupWindow({ product, closePopup }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [showrating, setRating] = useState(false);
  const Openrating = () => {
    setRating(true);
  };
  const CloseRaiting = () => {
    setRating(false);
  }
  useEffect(() => {
    const imageChangeInterval = setInterval(() => {
      setIsFading(true);


      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === product.image.length - 1 ? 0 : prevIndex + 1
        );
        setIsFading(false);
      }, 1500);

    }, 5000); // Change image every 5 seconds?

    return () => clearInterval(imageChangeInterval); 
  }, [product.image.length]);
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button type="button" className="btn-close popup-close" aria-label="Close" onClick={closePopup}></button>
        <div className="popup-body">
          <img
            src={product.image[currentImageIndex]}
            alt={product.name}
            className={`popup-img ${isFading ? 'fade' : ''}`}
          />
          <div className="popup-text">
            <h3>{product.name}</h3>
            <h5><b>Price: </b><span style={{color: "green"}}>{(product.price * (1 - product.offer / 100)).toFixed(2)}$</span></h5>
            {product.offer ? <p>Sales: {product.offer}%</p> : null}
            {product.offer ? <p>Before Sales: {product.price}$</p> : null}
            <h5>Description: </h5>
            <p>{product.desc}</p>
            <p><b>Rating:</b> <span style={{ color: product.rate <= 2 ? 'red' : 'green' }}>
              {product.rate}
            </span> &#x2605; <a className='tocontact' onClick={()=> Openrating()} style={{cursor: 'pointer'}}>Rating This Product</a></p>
          </div>
        </div>
      </div>
      {showrating && (
        <Ratings
          CloseRaiting={CloseRaiting}
        />
      )}
    </div>

  );
}

export default PopupWindow;