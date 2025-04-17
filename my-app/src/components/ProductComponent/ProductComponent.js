import React, { useState } from 'react';
import './ProductComponent.css';
import FeatureCard from './FeatureCard';
import Modal from './Modal';

const ProductComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [modalImage, setModalImage] = useState("");

  const features = [
    {
      title: "SALE UNBAN",
      description: "8.33$",
      image: require('../../assets/imageproduct/certapplebasic.png'),
      price: "265,000đ",
      salePrice: "125,000đ",
      marqueeText: 'Chứng chỉ Apple với gói Unban...',
      marqueeColor: '#ffffff',
      marqueeBackground: '#8800ff',
      content: 'Chứng chỉ Apple với gói Unban...',
      waitTime: '1 Phút',
      usageDuration: '1 Năm',
      warrantyTime: '10 Ngày',
      fileType: 'P12 & MobileProvision',
      deviceSupport: 'Không hỗ trợ đổi thiết bị',
      osSupport: 'Hỗ trợ tất cả hệ điều hành',
      deviceVersion: 'Hỗ trợ tất cả thiết bị Apple'
    },
    {
      title: "STANDARD",
      description: "5.33$",
      image: require('../../assets/imageproduct/certapplegetfree.png'),
      price: "199,000đ",
      salePrice: "129,000đ",
      marqueeText: 'Chứng chỉ Standard...',
      marqueeColor: '#ffffff',
      marqueeBackground: '#007bff',
      content: 'Chứng chỉ Standard...',
      waitTime: '5 Phút',
      usageDuration: '1 Năm',
      warrantyTime: '7 Ngày',
      fileType: 'P12 & MobileProvision',
      deviceSupport: 'Không hỗ trợ đổi thiết bị',
      osSupport: 'iOS 15 trở lên',
      deviceVersion: 'iPhone X trở lên'
    },
    {
      title: "VIP",
      description: "15.99$",
      image: require('../../assets/imageproduct/certappleminigame.png'),
      price: "499,000đ",
      salePrice: "359,000đ",
      marqueeText: 'Gói VIP cao cấp...',
      marqueeColor: '#ffffff',
      marqueeBackground: '#ff6600',
      content: 'Gói VIP cao cấp...',
      waitTime: '1 Phút',
      usageDuration: '1 Năm',
      warrantyTime: '15 Ngày',
      fileType: 'P12 & MobileProvision',
      deviceSupport: 'Hỗ trợ đổi thiết bị',
      osSupport: 'Tất cả hệ điều hành',
      deviceVersion: 'Mọi thiết bị Apple'
    }
  ];

  const handleButtonClick = (feature) => {
    setModalContent(feature);
    setModalImage(feature.image);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <div className="feature-cards">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
          price={feature.salePrice}
          originalPrice={feature.price}
          image={feature.image}
          onClick={() => handleButtonClick(feature)}
        />
      ))}

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
