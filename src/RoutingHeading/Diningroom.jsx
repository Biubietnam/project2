import React, { useState } from 'react';
import data from '../data/DiningRoomData.json';
import PopupWindow from './popup';

function DiningRoom() {
  const [products] = useState(data);
  const [searchTerm, setSearchTerm] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(''); // New state for selected brand

  const url = process.env.PUBLIC_URL;
  const hotlogoicon = url + '/img/hotoffericon.png';
  
  const getproduct = (product) => {
    setSelectedProduct(product);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const fnSearch = () => {
    return products.filter((product) => {
      const matchesSearchTerm = product.name.toLowerCase().startsWith(searchTerm.toLowerCase());
      const matchesBrand = selectedBrand ? product.brand === selectedBrand : true;
      return matchesSearchTerm && matchesBrand;
    });
  };

  const filteredProducts = fnSearch();

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
  };

  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col-12">
          <h2 className="mb-3">FIND THE PERFECT PIECE</h2>
          <input
            type="text"
            className="form-control"
            placeholder="Start typing here..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-12">
          <p className="text-muted">
            Showing {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="dropdown">
        <label style={{ fontSize: '1.5em', fontWeight: 'bold' }} className="dropdown-toggle" role="button" data-bs-toggle="dropdown">Sort by Brand</label>
        <div className="dropdown-menu filter">
          <button className="dropdown-item" onClick={() => handleBrandSelect('Ashley')}>Ashley</button>
          <button className="dropdown-item" onClick={() => handleBrandSelect('IKEA')}>IKEA</button>
          <button className="dropdown-item" onClick={() => handleBrandSelect('Roche Bobois')}>Roche Bobois</button>
          <button className="dropdown-item" onClick={() => handleBrandSelect('')}>All Brands</button> 
        </div>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {filteredProducts.map((product) => (
          <div className="col" key={product.id}>
            <div className="card h-100 border-1 productbox">
              {product.offer && (
                <img
                  src={hotlogoicon}
                  alt="Hot Offer"
                  className="hot-logo-icon"
                />
              )}
              <img
                src={product.image[0]}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p
                  className="card-text"
                  style={{
                    textDecoration: product.offer ? 'line-through' : 'none',
                  }}
                >
                  {product.price}$
                </p>
                {product.offer && (
                  <p className="card-text text-success">
                    {(product.price * (1 - product.offer / 100)).toFixed(2)}$
                  </p>
                )}
                <button
                  className="btn btn-primary"
                  onClick={() => getproduct(product)}
                >
                  Detail
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showPopup && (
        <PopupWindow
          product={selectedProduct}
          closePopup={closePopup}
        />
      )}
    </div>
  );
}

export default DiningRoom;
