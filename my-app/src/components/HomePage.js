import React from "react";
import background from "../assets/images/background.png";
import certappleLogo from "../assets/images/logo1.png"; 
import qrCode from "../assets/images/logo1.png"; 

import "../assets/styles/HomePage.css"; // Import the CSS file

const HomePage = () => {
  return (
    <section id="hero" className="hero">
      <div className="heroWrapper" style={{ backgroundImage: `url(${background})` }}>
        <h1 className="heading">CERTAPPLE.COM</h1>
        {/* <p className="description">
          Chào mừng bạn đến với CertApple.com. Chúng tôi cung cấp dịch vụ chứng chỉ Apple tự động và an toàn cho các thiết bị iOS và macOS.
        </p> */}

        <div className="qrBox">
          <img src={qrCode} alt="QR Tải Chrome" className="qrImage" />
          <p className="qrText">Tải CERTAPPLE về điện thoại</p>
        </div>

      
      </div>
      {/* Updated section to match the requested structure */}
      <div className="certappleLogoBox">
          <img 
            className="certappleLogoImage" 
            src={certappleLogo} 
            alt="CertApple Logo" 
          />
          <div className="certappleLogoCircle"></div> {/* Added the circle as per your request */}
        </div>
    </section>
  );
};

export default HomePage;
