import React, { useState } from 'react';
import logo from "../assets/images/logo1.png"; // Correct the import path for the logo
import "../assets/styles/Header.css"; // Ensure the CSS path is correct

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>☰</div>

      <nav className="desktop-nav">
        <a href="#gioi-thieu">Giới thiệu</a>
        <a href="#don-hang">Đơn hàng</a>
        <a href="#faqs">FAQs</a>
        <a href="#tin-tuc">Tin tức</a>
        <a href="#chia-se">Chia sẻ</a>
        <a href="#ho-tro">Hỗ trợ</a>
        <a href="#ngon-ngu">Ngôn ngữ</a>
      </nav>

      <div className="login">
        <a href="#login" className="login-btn">Đăng nhập</a>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-nav">
          <div className="user-info">
            <span className="material-icons">account_circle</span>
          </div>
          <a href="#gioi-thieu">Giới thiệu</a>
          <a href="#don-hang">Đơn hàng</a>
          <a href="#faqs">Câu hỏi thường gặp</a>
          <a href="#tin-tuc">Tin tức</a>
          <a href="#chia-se">Chia sẻ</a>
          <a href="#ho-tro">Hỗ trợ</a>
          <a href="#ngon-ngu">Ngôn ngữ</a>
        </div>
      )}
    </header>
  );
};

export default Header;
