import React, { useState } from 'react';
import './ProductDetailModal.css';
import ProductActionButton from './ProductActionButton';
import qrCurrent from '../../assets/qr/qr-current.png';
import qrOther from '../../assets/qr/qr-other.png';

const ProductDetailModal = ({ product, onClose }) => {
  const [step, setStep] = useState('default');

  if (!product) return null;

  const handleBuy = (mode) => {
    setStep(mode);
  };

  return (
    <div className="product-modal" onClick={onClose}>
      <div className="product-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-body">
          {/* BÊN TRÁI */}
          <div className="modal-text">
            <div className="label">{product.platform}</div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>

            <h4>iOS</h4>
            <ol>
              <li>
                Nhấn vào <b>Trình đơn Chrome</b>
                <i className="material-icons icon">more_horiz</i>
                <b>Trình quản lý mật khẩu</b>
                <i className="material-icons icon">vpn_key</i>.
              </li>
              <li>
                Chọn mật khẩu bạn muốn chia sẻ, rồi nhấn vào <b>Chia sẻ</b>
                <i className="material-icons icon">share</i>.
              </li>
              <li>
                <span className="link">Chọn thành viên gia đình</span> để chia sẻ mật khẩu.
              </li>
            </ol>

            <h4>Android</h4>
            <ol>
              <li>
                Nhấn vào <b>Trình đơn Chrome</b>
                <i className="material-icons icon">more_horiz</i>
                <i className="material-icons arrow">chevron_right</i>
                <b>Cài đặt</b>
                <i className="material-icons icon">settings</i>
                <i className="material-icons arrow">chevron_right</i>
                <b>Trình quản lý mật khẩu</b>.
              </li>
              <li>
                Trong phần <b>Tìm mật khẩu</b>, hãy chọn mật khẩu bạn muốn chia sẻ rồi nhấn vào
                <b>Chia sẻ</b> <i className="material-icons icon">share</i>.
              </li>
              <li>
                <span className="link">Chọn thành viên gia đình</span> để chia sẻ mật khẩu.
              </li>
            </ol>
            <p className="note">{product.note}</p>
          </div>

          {/* BÊN PHẢI */}
          <div className="modal-side-content">
            <button className="modal-close" onClick={onClose}>×</button>
            <div className="modal-side-wrapper">
              <div className="modal-image-container">
                <img src={product.image} alt={product.title} className="modal-image" />
              </div>
            </div>

            {step === 'default' && (
              <div className="modal-buttons buttons-default">
                <ProductActionButton onClick={() => handleBuy('current')}>
                  MUA CHO THIẾT BỊ NÀY
                </ProductActionButton>
                <ProductActionButton color="green" onClick={() => handleBuy('other')}>
                  MUA CHO THIẾT BỊ KHÁC
                </ProductActionButton>
                <ProductActionButton color="orange" onClick={() => handleBuy('manual')}>
                  MUA THỦ CÔNG BẰNG UDID
                </ProductActionButton>
              </div>
            )}

            {step === 'current' && (
              <div className="modal-next-step">
                <img src={qrCurrent} alt="QR Code current device" className="qr-image" />
                <p className="qr-note">Vui lòng quét mã bằng iPhone hoặc iPad của bạn</p>
                <button className="btn" onClick={() => setStep('default')}>Quay lại</button>
              </div>
            )}

            {step === 'other' && (
              <div className="modal-next-step">
                <h4 style={{ color: 'green' }}>MUA CHO THIẾT BỊ KHÁC</h4>
                <p style={{ color: 'red' }}>Vui lòng chỉ sử dụng thiết bị khác hoặc Safari để lấy UDID</p>
                <div className="copy-link-box">
                  <input
                    type="text"
                    value="https://h5m4.c19.e2-1.dev/image-video/mobile-configs/24ae90cf-2f23-43b9-871f-4b357a082dfa.mobileconfig"
                    readOnly
                  />
                  <button className="btn blue">COPY LINK</button>
                </div>
                <img src={qrOther} alt="QR Code other device" className="qr-image" />
                <button className="btn green" onClick={() => setStep('default')}>Quay lại</button>
              </div>
            )}

            {step === 'manual' && (
              <div className="modal-next-step">
                <h4 style={{ color: 'darkorange' }}>MUA THỦ CÔNG BẰNG UDID</h4>
                <input type="text" placeholder="Điền UDID thiết bị" className="udid-input" />
                <input type="text" placeholder="-- Vui lòng chọn thiết bị --" className="udid-input" />
                <label>
                  <input type="checkbox" /> Tôi cam kết đã kiểm tra UDID kỹ trước khi tiếp tục
                </label>
                <div className="modal-buttons">
                  <button className="btn orange">TẠO ĐƠN</button>
                  <button className="btn" onClick={() => setStep('default')}>Quay lại</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
