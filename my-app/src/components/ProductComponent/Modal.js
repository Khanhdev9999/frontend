import React from 'react';
import './Modal.css';

// ✅ Import icon từ src/assets/icons
import telegramIcon from '../../assets/icons/telegram.png';
import facebookIcon from '../../assets/icons/facebook.png';
import zaloIcon from '../../assets/icons/zalo.png';
import whatsappIcon from '../../assets/icons/whatsapp.png';
import youtubeIcon from '../../assets/icons/youtube.png';

// ✅ Import icon từ src/assets/icons
import binanceIcon from '../../assets/icons/binance.png';
import paypalIcon from '../../assets/icons/paypal.png';
import vietqrIcon from '../../assets/icons/vietqr.png';

const Modal = ({ showModal, closeModal, modalContent, modalImage }) => {
  if (!showModal) return null;

  return (
    <div className="modal" onClick={(e) => e.target.classList.contains('modal') && closeModal()}>
      <div className="modal-content">
        <span className="close-btn" onClick={closeModal}>&times;</span>
        <div className="modal-body">
          <div className="modal-text">
            <h1 className="modal-heading">
              Gói chứng chỉ: <span className="modal-title">{modalContent.name}</span>
            </h1>
            <p className="modal-subtitle">
              Thanh toán qua PayPal hoặc USDT bằng: <span className="modal-desc">{modalContent.priceUSD}</span>
            </p>

            <marquee
              className="modal-marquee"
              style={{
                color: modalContent.marqueeColor,
                backgroundColor: modalContent.marqueeBackground,
              }}
            >
              {modalContent.marqueeText}
            </marquee>

            <p className="modal-description">{modalContent.content}</p>
            <hr className="modal-divider" />

            <div className="modal-table">
              <table>
                <tbody>
                  <tr><td><strong>Thời gian chờ:</strong></td><td>{modalContent.waitTime}</td></tr>
                  <tr><td><strong>Thời hạn:</strong></td><td>{modalContent.usageDuration}</td></tr>
                  <tr><td><strong>Bảo hành:</strong></td><td>{modalContent.warrantyTime}</td></tr>
                  <tr><td><strong>File chứng chỉ:</strong></td><td>{modalContent.fileType}</td></tr>
                  <tr><td><strong>Đổi thiết bị:</strong></td><td>{modalContent.deviceSupport}</td></tr>
                </tbody>
              </table>
            </div>

            <div className="modal-support-section">
              <p className="modal-desc modal-support-title">Các danh mục phiên bản hỗ trợ</p>
              <div className="modal-table">
                <table>
                  <tbody>
                    <tr>
                      <td><strong>Phiên bản hệ điều hành:</strong></td>
                      <td className="gradient-text">{modalContent.osSupport}</td>
                    </tr>
                    <tr>
                      <td><strong>Phiên bản thiết bị:</strong></td>
                      <td className="gradient-text">{modalContent.deviceVersion}</td>
                    </tr>
                    <tr>
                      <td><strong>Hỗ trợ thanh toán:</strong></td>
                      <td className="payment-icons">
                        <img src={binanceIcon} alt="Binance" />
                        <img src={paypalIcon} alt="PayPal" />
                        <img src={vietqrIcon} alt="VietQR" />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="gradient-text1">
                        <strong>Đối với thiết bị iPad bạn sẽ được "Miễn Phí" hoàn toàn</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Giá + Mạng xã hội */}
            <div className="modal-bottom-row">
              <div className="modal-price">
                <span className="discounted-price">{modalContent.salePrice}</span>
                <span className="original-price">{modalContent.price}</span>
              </div>
              <div className="modal-social-icons">
                <a href="https://t.me/CertApple_KT" target="_blank" rel="noopener noreferrer">
                  <img src={telegramIcon} alt="Telegram" />
                </a>
                <a href="https://www.facebook.com/ADKenhTao/" target="_blank" rel="noopener noreferrer">
                  <img src={facebookIcon} alt="Facebook" />
                </a>
                <a href="https://zalo.me/g/nhothm102" target="_blank" rel="noopener noreferrer">
                  <img src={zaloIcon} alt="Zalo" />
                </a>
                <a href="https://chat.whatsapp.com/KXqcHO2LZyD54goJtogsSL" target="_blank" rel="noopener noreferrer">
                  <img src={whatsappIcon} alt="WhatsApp" />
                </a>
                <a href="https://www.youtube.com/@CertP12" target="_blank" rel="noopener noreferrer">
                  <img src={youtubeIcon} alt="YouTube" />
                </a>
              </div>
            </div>

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
    </div>
  );
};

export default Modal;
