import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductDetailModal from './ProductDetailModal';
import './ProductList.css';

// Danh sách 3 sản phẩm mẫu
const productGuides = [
  {
    platform: 'DI ĐỘNG',
    title: 'Chia sẻ mật khẩu trên điện thoại',
    description:
      'Dễ dàng chia sẻ bản sao mật khẩu với nhóm gia đình một cách an toàn trong Trình quản lý mật khẩu của Google trên điện thoại của bạn.',
    image: require('../../assets/imageproduct/certapplebasic.png'),
    steps: {
      ios: [
        { step: 1, instruction: 'Nhấn vào' },
        { step: 2, instruction: 'Chọn mật khẩu bạn muốn chia sẻ, rồi nhấn vào Chia sẻ.' },
        { step: 3, instruction: 'Chọn thành viên gia đình để chia sẻ mật khẩu.' }
      ],
      android: [
        { step: 1, instruction: 'Nhấn vào Trình đơn Chrome > Cài đặt > Trình quản lý mật khẩu.' },
        { step: 2, instruction: 'Trong phần Tìm mật khẩu, hãy chọn mật khẩu bạn muốn chia sẻ rồi nhấn vào Chia sẻ.' },
        { step: 3, instruction: 'Chọn thành viên gia đình để chia sẻ mật khẩu.' }
      ]
    },
    note: 'Quét Mã QR để tải Chrome về điện thoại của bạn'
  },
  {
    platform: 'LAPTOP',
    title: 'Chia sẻ mật khẩu trên máy tính',
    description:
      'Thực hiện chia sẻ mật khẩu an toàn thông qua trình duyệt Chrome trên laptop của bạn.',
    image: require('../../assets/imageproduct/certapplebasic.png'),
    steps: {
      ios: [],
      android: []
    },
    note: 'Áp dụng cho hệ điều hành Windows và macOS'
  },
  {
    platform: 'TABLET',
    title: 'Chia sẻ quyền truy cập trên máy tính bảng',
    description:
      'Hướng dẫn chia sẻ quyền truy cập và dữ liệu trên máy tính bảng Android/iPadOS.',
    image: require('../../assets/imageproduct/certapplebasic.png'),
    steps: {
      ios: [],
      android: []
    },
    note: 'Kiểm tra kết nối mạng trước khi chia sẻ'
  }
];

const ProductList = () => {
  const [selectedGuide, setSelectedGuide] = useState(null);

  const openModal = (guide) => setSelectedGuide(guide);
  const closeModal = () => setSelectedGuide(null);

  return (
    <div className="product-list">
      {productGuides.map((guide, index) => (
        <ProductCard
          key={index}
          product={guide}
          onDetailClick={() => openModal(guide)}
        />
      ))}
      {selectedGuide && (
        <ProductDetailModal product={selectedGuide} onClose={closeModal} />
      )}
    </div>
  );
};

export default ProductList;
