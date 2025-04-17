import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductDetailModal from './ProductDetailModal';
import './ProductList.css';

const passwordSharingGuide = {
  platform: 'mobile',
  title: 'Chia sẻ mật khẩu trên điện thoại',
  description:
    'Dễ dàng chia sẻ bản sao mật khẩu với nhóm gia đình một cách an toàn trong Trình quản lý mật khẩu của Google trên điện thoại của bạn.',
  image: require('../../assets/imageproduct/certapplebasic.png'),
  steps: {
    ios: [
      {
        step: 1,
        instruction: 'Nhấn vào Trình đơn Chrome > Trình quản lý mật khẩu.',
      },
      {
        step: 2,
        instruction: 'Chọn mật khẩu bạn muốn chia sẻ, rồi nhấn vào Chia sẻ.',
      },
      {
        step: 3,
        instruction: 'Chọn thành viên gia đình để chia sẻ mật khẩu.',
      },
    ],
    android: [
      {
        step: 1,
        instruction: 'Nhấn vào Trình đơn Chrome > Cài đặt > Trình quản lý mật khẩu.',
      },
      {
        step: 2,
        instruction:
          'Trong phần Tìm mật khẩu, hãy chọn mật khẩu bạn muốn chia sẻ rồi nhấn vào Chia sẻ.',
      },
      {
        step: 3,
        instruction: 'Chọn thành viên gia đình để chia sẻ mật khẩu.',
      },
    ],
  },
  note: 'Quét Mã QR để tải Chrome về điện thoại của bạn',
};

const ProductList = () => {
  const [selectedGuide, setSelectedGuide] = useState(null);

  const openModal = () => setSelectedGuide(passwordSharingGuide);
  const closeModal = () => setSelectedGuide(null);

  return (
    <div className="product-list">
      <ProductCard product={passwordSharingGuide} onDetailClick={openModal} />
      {selectedGuide && (
        <ProductDetailModal product={selectedGuide} onClose={closeModal} />
      )}
    </div>
  );
};

export default ProductList;
