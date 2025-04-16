import React from 'react';
import './Modal.css';  // Import CSS for modal styling

const Modal = ({ showModal, closeModal, modalContent, modalImage }) => {
  if (!showModal) return null;

  return (
    <div className="modal" onClick={(e) => e.target.classList.contains('modal') && closeModal()}>
      <div className="modal-content">
        <span className="close-btn" onClick={closeModal}>&times;</span>
        <div className="modal-body">
          <div className="modal-text">
            <h1 className="modal-title">Gói chứng chỉ: <span>{modalContent.title}</span></h1>
            <p className="modal-desc">Thanh toán qua PayPal hoặc USDT bằng {modalContent.description}</p>

            {/* Table with product details */}
            <div className="modal-table">
              <table>
                <tbody>
                  <tr>
                    <td><strong>Thời gian chờ:</strong></td>
                    <td>{modalContent.time}</td>
                  </tr>
                  <tr>
                    <td><strong>Thời hạn:</strong></td>
                    <td>{modalContent.warranty}</td>
                  </tr>
                  <tr>
                    <td><strong>Bảo hành:</strong></td>
                    <td>{modalContent.warrantyPeriod}</td>
                  </tr>
                  <tr>
                    <td><strong>File chứng chỉ:</strong></td>
                    <td>{modalContent.file}</td>
                  </tr>
                  <tr>
                    <td><strong>Đổi thiết bị:</strong></td>
                    <td>{modalContent.deviceSupport}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Price Section */}
            <div className="modal-price">
              <span className="original-price">{modalContent.originalPrice}</span>
              <span className="discounted-price">{modalContent.price}</span>
            </div>

            {/* Action Buttons */}
            <div className="modal-buttons">
              <button className="btn">MUA CHO THIẾT BỊ NÀY</button>
              <button className="btn green">MUA CHO THIẾT BỊ KHÁC</button>
              <button className="btn orange">MUA THỦ CÔNG BẰNG UDID</button>
            </div>
          </div>

          {/* Image Section */}
          <div className="modal-image">
            <img src={modalImage} alt="Product" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
