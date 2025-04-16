import React from 'react';
import './FeatureCard.css'; // Import CSS for styling
// Import images


const FeatureCard = ({ title, description, price, originalPrice, image, onClick }) => {
  return (
    <div className="feature-card">
      <img src={image} alt="a" className="feature-img" />
      <div className="feature-content">
        <h3 className="feature-title">{title}</h3>
        <p className="feature-desc">{price} {originalPrice}</p>
        <button className="btn" onClick={() => onClick(title, description, image, price, originalPrice)}>
          +
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;
