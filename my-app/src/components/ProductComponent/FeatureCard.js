  import React from 'react';
  import './FeatureCard.css'; // Import CSS for styling

  const FeatureCard = ({ title, description, price, originalPrice, image, onClick }) => {
    return (
      <div className="feature-card">
        <img src={image} alt={title} className="feature-img" />
        <div className="feature-content">
          <h3 className="feature-title">Gói: {title}</h3>
          <p className="feature-usd">Pay with:  <strong>{description}</strong></p>
          <p className="feature-vnd">
            <span className="price-sale">{price}</span>
            <span className="price-original">{originalPrice}</span>
          </p>
          <button className="feature-btn" onClick={onClick}>+</button>

        </div>
      </div>
      

      
    );
  };

  export default FeatureCard;
