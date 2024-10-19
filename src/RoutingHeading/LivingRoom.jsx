import React, { useState, useEffect } from 'react';
function ProductListing () {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


    fetchProducts();
  }, []);


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
            Showing all {filteredProducts.length} results
          </p>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col">
            <div className="card h-100 border-0">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
