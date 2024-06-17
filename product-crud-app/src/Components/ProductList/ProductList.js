import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to fetch products. Please try again later.');
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list-container">
      {error && <p className="error">{error}</p>}
      <h2>Product List</h2>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product._id} className="product-item">
            <span className="product-name">{product.name}</span>
            <span className="product-price">${product.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
