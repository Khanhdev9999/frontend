// src/components/ProductComponent.js
import React, { useState } from 'react';
import './ProductComponent.css';  // Import CSS

// Import images
import certapplebasic from '../../assets/imageproduct/certapplebasic.png';
import certapplefree from '../../assets/imageproduct/certapplegetfree.png';
import certappleminigame from '../../assets/imageproduct/certappleminigame.png';

const ProductComponent = () => {
  const [showModal, setShowModal] = useState(false); // Track modal visibility
  const [modalContent, setModalContent] = useState(""); // Track modal content
  const [modalImage, setModalImage] = useState(""); // Track modal image

  const handleButtonClick = (title, description, image) => {
    setModalContent({title, description}); // Set modal content
    setModalImage(image); // Set modal image
    setShowModal(true); // Show the modal
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal
  };

  const handleOutsideClick = (e) => {
    // If clicked outside of modal content, close the modal
    if (e.target.classList.contains('modal')) {
      setShowModal(false);
    }
  };

  return (
    <div className="feature-cards">
      <div className="feature-card">
        <img src={certapplebasic} alt="a" className="feature-img" />
        <div className="feature-content">
          <h3 className="feature-title">Thanh toán nhanh và an toàn hơn...</h3>
          <p className="feature-desc">23,000đ 30,000đ</p>
          <button className="btn" onClick={() => handleButtonClick("Gói chứng chỉ : GET FREE", "Thanh toán qua PayPal hoặc USDT bằng 0.00$", certapplebasic)}>+</button>
        </div>
      </div>
      <div className="feature-card">
        <img src={certapplefree} alt="b" className="feature-img" />
        <div className="feature-content">
          <h3 className="feature-title">Tìm kiếm về mọi thứ bạn thấy...</h3>
          <p className="feature-desc">Google ống kính trong Chrome giúp bạn...</p>
          <button className="btn" onClick={() => handleButtonClick("Tìm kiếm về mọi thứ bạn thấy", "Google ống kính trong Chrome giúp bạn...", certapplefree)}>+</button>
        </div>
      </div>
      <div className="feature-card">
        <img src={certappleminigame} alt="c" className="feature-img" />
        <div className="feature-content">
          <h3 className="feature-title">Trò chuyện với Gemini trên thanh...</h3>
          <p className="feature-desc">Nhớ có lỗi tất mới này trong Chrome, bạn có thể...</p>
          <button className="btn" onClick={() => handleButtonClick("Trò chuyện với Gemini", "Nhớ có lỗi tất mới này trong Chrome, bạn có thể...", certappleminigame)}>+</button>
        </div>
      </div>
      <div className="feature-card">
        <img src={certapplebasic} alt="a" className="feature-img" />
        <div className="feature-content">
          <h3 className="feature-title">Thanh toán nhanh và an toàn hơn...</h3>
          <p className="feature-desc">23,000đ 30,000đ</p>
          <button className="btn" onClick={() => handleButtonClick("Thanh toán nhanh và an toàn hơn", "Diễn giải đầy đủ thông tin thẻ thanh toán theo...", certapplebasic)}>+</button>
        </div>
      </div>
      <div className="feature-card">
        <img src={certapplefree} alt="b" className="feature-img" />
        <div className="feature-content">
          <h3 className="feature-title">Tìm kiếm về mọi thứ bạn thấy...</h3>
          <p className="feature-desc">Google ống kính trong Chrome giúp bạn...</p>
          <button className="btn" onClick={() => handleButtonClick("Tìm kiếm về mọi thứ bạn thấy", "Google ống kính trong Chrome giúp bạn...", certapplefree)}>+</button>
        </div>
      </div>
      <div className="feature-card">
        <img src={certappleminigame} alt="c" className="feature-img" />
        <div className="feature-content">
          <h3 className="feature-title">Trò chuyện với Gemini trên thanh...</h3>
          <p className="feature-desc">Nhớ có lỗi tất mới này trong Chrome, bạn có thể...</p>
          <button className="btn" onClick={() => handleButtonClick("Trò chuyện với Gemini", "Nhớ có lỗi tất mới này trong Chrome, bạn có thể...", certappleminigame)}>+</button>
        </div>
      </div>
      <div className="feature-card">
        <img src={certapplebasic} alt="a" className="feature-img" />
        <div className="feature-content">
          <h3 className="feature-title">Thanh toán nhanh và an toàn hơn...</h3>
          <p className="feature-desc">23,000đ 30,000đ</p>
          <button className="btn" onClick={() => handleButtonClick("Thanh toán nhanh và an toàn hơn", "Diễn giải đầy đủ thông tin thẻ thanh toán theo...", certapplebasic)}>+</button>
        </div>
      </div>
      <div className="feature-card">
        <img src={certapplefree} alt="b" className="feature-img" />
        <div className="feature-content">
          <h3 className="feature-title">Tìm kiếm về mọi thứ bạn thấy...</h3>
          <p className="feature-desc">Google ống kính trong Chrome giúp bạn...</p>
          <button className="btn" onClick={() => handleButtonClick("Tìm kiếm về mọi thứ bạn thấy", "Google ống kính trong Chrome giúp bạn...", certapplefree)}>+</button>
        </div>
      </div>
      <div className="feature-card">
        <img src={certappleminigame} alt="c" className="feature-img" />
        <div className="feature-content">
          <h3 className="feature-title">Trò chuyện với Gemini trên thanh...</h3>
          <p className="feature-desc">Nhớ có lỗi tất mới này trong Chrome, bạn có thể...</p>
          <button className="btn" onClick={() => handleButtonClick("Trò chuyện với Gemini", "Nhớ có lỗi tất mới này trong Chrome, bạn có thể...", certappleminigame)}>+</button>
        </div>
      </div>

      {/* Modal - Display when showModal is true */}
      {showModal && (
        <div className="modal" onClick={handleOutsideClick}>
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <div className="modal-text">
              <h1>{modalContent.title}</h1>
              <h2>{modalContent.description}</h2>

              <table className="support-table">
      <thead>
        <tr>
          <th colSpan="2" className="title">Các danh mục phiên bản hỗ trợ</th>
        </tr>
      </thead>
      <tbody>
        {/* First Table */}
        <tr>
          <td className="label">Thời gian chờ:</td>
          <td className="value">75 Giờ</td>
        </tr>
        <tr>
          <td className="label">Thời hạn:</td>
          <td className="value">Không xác định</td>
        </tr>
        <tr>
          <td className="label">Bảo hành:</td>
          <td className="value">0 Ngày</td>
        </tr>
        <tr>
          <td className="label">File chứng chỉ:</td>
          <td className="value">P12 & MobileProvision</td>
        </tr>
        <tr>
          <td className="label">Đổi thiết bị:</td>
          <td className="value">Không hỗ trợ đổi thiết bị</td>
        </tr>

        {/* Second Table (Separate Section) */}
        <tr>
          <td colSpan="2" className="title">Các danh mục phiên bản hỗ trợ</td>
        </tr>
        <tr>
          <td className="label">Phiên bản hệ điều hành:</td>
          <td className="value">Hỗ trợ tất cả hệ điều hành</td>
        </tr>
        <tr>
          <td className="label">Phiên bản thiết bị:</td>
          <td className="value">Hỗ trợ tất cả thiết bị Apple</td>
        </tr>
        <tr>
          
          {/* <td className="value">
            <span className="payment-icons">
              <img src="binance-logo.png" alt="Binance" />
              <img src="paypal-logo.png" alt="PayPal" />
              <img src="visa-logo.png" alt="Visa" />
              <img src="vietqr-logo.png" alt="VietQR" />
            </span>
          </td> */}
        </tr>
        <tr>
          <td colSpan="2" className="extra-info">Đối với thiết bị iPad bạn sẽ được "Miễn Phí" hoàn toàn</td>
        </tr>
      </tbody>
    </table>                
              <div className="modal-buttons">
              <button className="btn">MUA CHO THIẾT BỊ NÀY</button>
              <button className="btn green">MUA CHO THIẾT BỊ KHÁC</button>
              <button className="btn orange">MUA THỦ CÔNG BẰNG UDID</button>
            </div>
            </div>
            <div className="modal-image">
              <img src={modalImage} alt="Product" />
            </div>

           
            
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductComponent;
