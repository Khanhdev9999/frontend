import React, { useState } from 'react';
import './ProductComponent.css';  // Import CSS
import FeatureCard from './FeatureCard';
import Modal from './Modal';

const ProductComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [modalImage, setModalImage] = useState("");

  const handleButtonClick = (title, description, image, price, originalPrice, time, warranty, file, deviceSupport) => {
    setModalContent({ title, description, price, originalPrice, time, warranty, file, deviceSupport });
    setModalImage(image);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <div className="feature-cards">
      {/* Feature Cards */}
      <FeatureCard 
        title="Thanh toán nhanh và an toàn hơn..."
        description="23,000đ 30,000đ"
        price="23,000đ"
        originalPrice="30,000đ"
        image={require('../../assets/imageproduct/certapplebasic.png')}
        onClick={handleButtonClick}
      />
      <FeatureCard 
        title="Thanh toán nhanh và an toàn hơn..."
        description="23,000đ 30,000đ"
        price="23,000đ"
        originalPrice="30,000đ"
        image={require('../../assets/imageproduct/certapplebasic.png')}
        onClick={handleButtonClick}
      />
      <FeatureCard 
        title="Thanh toán nhanh và an toàn hơn..."
        description="23,000đ 30,000đ"
        price="23,000đ"
        originalPrice="30,000đ"
        image={require('../../assets/imageproduct/certapplebasic.png')}
        onClick={handleButtonClick}
      />
      <FeatureCard 
        title="Thanh toán nhanh và an toàn hơn..."
        description="23,000đ 30,000đ"
        price="23,000đ"
        originalPrice="30,000đ"
        image={require('../../assets/imageproduct/certapplebasic.png')}
        onClick={handleButtonClick}
      />
      <FeatureCard 
        title="Thanh toán nhanh và an toàn hơn..."
        description="23,000đ 30,000đ"
        price="23,000đ"
        originalPrice="30,000đ"
        image={require('../../assets/imageproduct/certapplebasic.png')}
        onClick={handleButtonClick}
      />
      <FeatureCard 
        title="Thanh toán nhanh và an toàn hơn..."
        description="23,000đ 30,000đ"
        price="23,000đ"
        originalPrice="30,000đ"
        image={require('../../assets/imageproduct/certapplebasic.png')}
        onClick={handleButtonClick}
      />
      <FeatureCard 
        title="Thanh toán nhanh và an toàn hơn..."
        description="23,000đ 30,000đ"
        price="23,000đ"
        originalPrice="30,000đ"
        image={require('../../assets/imageproduct/certapplebasic.png')}
        onClick={handleButtonClick}
      />
      <FeatureCard 
        title="Thanh toán nhanh và an toàn hơn..."
        description="23,000đ 30,000đ"
        price="23,000đ"
        originalPrice="30,000đ"
        image={require('../../assets/imageproduct/certapplebasic.png')}
        onClick={handleButtonClick}
      />
      <FeatureCard 
        title="Thanh toán nhanh và an toàn hơn..."
        description="23,000đ 30,000đ"
        price="23,000đ"
        originalPrice="30,000đ"
        image={require('../../assets/imageproduct/certapplebasic.png')}
        onClick={handleButtonClick}
      />
      
      
      {/* Modal for displaying details */}
      <Modal 
        showModal={showModal} 
        closeModal={closeModal} 
        modalContent={modalContent} 
        modalImage={modalImage} 
      />
    </div>
  );
};

export default ProductComponent;
