import React from 'react';
import diningRoomData from '../data/DiningRoomData.json';
import homeOfficeData from '../data/HomeOffice.json';
import livingRoomData from '../data/LivingRoomData.json';
import outdoorData from '../data/OutDoor.json';
import bedroomData from '../data/BedRoom.json';


const allData = [
  ...diningRoomData,
  ...homeOfficeData,
  ...livingRoomData,
  ...outdoorData,
  ...bedroomData,
];

export default function Gallery() {  
  const images = allData.map(item => {
    const randomIndex = Math.floor(Math.random() * item.image.length);
    return {
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image[randomIndex]
    };
  });

  return (
    <div className="gallery-container d-flex align-items-center justify-content-center min-vh-100">
      <div className="container">
        <h1 className="text-center mb-5">Gallery</h1>
        <div className="row g-4">
          {images.map((image, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3">
              <div className="gallery-item" style={{ paddingBottom: '100%', position: 'relative' }}>
                <img
                  src={image.image}
                  alt={image.name}
                  className="img-fluid rounded"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .gallery-container {
          background-color: #f8f9fa;
          padding: 2rem 0;
        }
        .gallery-item {
          overflow: hidden;
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .gallery-item:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
        .gallery-item img {
          transition: all 0.3s ease;
        }
        .gallery-item:hover img {
          transform: scale(1.1);
        }
        @media (max-width: 768px) {
          .gallery-container {
            padding: 1rem 0;
          }
        }
      `}</style>
    </div>
  );
}
