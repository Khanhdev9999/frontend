import React from 'react';
import './ProductDetailModal.css';

const ProductDetailModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="product-modal" onClick={onClose}>
      <div className="product-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-body">
          {/* BÊN TRÁI */}
          <div className="modal-text">
            <h3>{product.title}</h3>
            <p>{product.description}</p>

            <h4>IOS:</h4>
            <ul>
              {product.steps.ios.map((step) => (
                <li key={`ios-step-${step.step}`}>{step.instruction}</li>
              ))}
            </ul>

            <h4>Android:</h4>
            <ul>
              {product.steps.android.map((step) => (
                <li key={`android-step-${step.step}`}>{step.instruction}</li>
              ))}
            </ul>

            <p className="note"><strong>Ghi chú:</strong> {product.note}</p>
          </div>

          {/* BÊN PHẢI (ảnh + nút gộp chung) */}
          <div className="modal-side-content">
            <div className="modal-image-container">
              <img src={product.image} alt={product.title} className="modal-image" />
            </div>

            <div className="modal-buttons">
              <button className="btn">MUA CHO THIẾT BỊ NÀY</button>
              <button className="btn green">MUA CHO THIẾT BỊ KHÁC</button>
              <button className="btn orange">MUA THỦ CÔNG BẰNG UDID</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
