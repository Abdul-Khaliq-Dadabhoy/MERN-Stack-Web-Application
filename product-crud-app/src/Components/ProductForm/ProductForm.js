import React, { useState } from 'react';
import axios from 'axios';
import './ProductForm.css';

function ProductForm() {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/products', product);
      console.log('Product created:', response.data);
      setProduct({ name: '', description: '', price: '', category: '' });
      setError(null);
    } catch (error) {
      console.error('Error creating product:', error);
      setError('Failed to create product. Please try again later.');
    }
  };

  return (
    <div className="product-form-container">
      <h2>Create Product</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={product.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          required
          min="0"
          step="0.01"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
          required
        />
        <button type="submit">Create</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default ProductForm;
