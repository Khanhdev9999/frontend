// src/components/ProductCard.js
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onDetailClick }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-info">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <button onClick={onDetailClick} className="detail-btn">Xem chi tiết</button>
      </div>
    </div>
  );
};

export default ProductCard;
