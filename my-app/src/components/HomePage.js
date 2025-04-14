import React from "react";
import background from "../assets/images/background.png";
import chromeLogo from "../assets/images/logo1.png";
import qrCode from "../assets/images/qr-wn-blue.png";

const styles = {
  section: {
    backgroundColor: "#f0f4ff",
    minHeight: "100vh",
    padding: "2rem",
    position: "relative",
  },
  heroWrapper: {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "16px",
    padding: "4rem 1rem",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#1a1a1a",
  },
  description: {
    fontSize: "1rem",
    color: "#333",
    marginTop: "8px",
  },
  qrBox: {
    position: "absolute",
    right: "2rem",
    bottom: "2rem",
    backgroundColor: "#0b57d0",
    padding: "1rem",
    borderRadius: "12px",
    textAlign: "center",
    width: "120px",
    color: "white",
  },
  qrImage: {
    width: "100%",
    borderRadius: "8px",
    marginBottom: "0.5rem",
  },
  chromeLogoBox: {
    position: "absolute",
    bottom: "-10px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#f0f4ff",
    padding: "10px",
    borderRadius: "50%",
    boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
  },
  chromeLogoImage: {
    width: "60px",
    height: "60px",
  },
};

export default function ChromeFeaturePage() {
  return (
    <section id="hero" style={styles.section}>
      <div style={styles.heroWrapper}>
        <h1 style={styles.heading}>CERTAPPLE.COM</h1>
        <p style={styles.description}>Chào mừng bạn đến với CertApple.com. Chúng tôi cung cấp dịch vụ chứng chỉ Apple tự động và an toàn cho các thiết bị iOS và macOS.</p>

        <div style={styles.qrBox}>
          <img src={qrCode} alt="QR Tải Chrome" style={styles.qrImage} />
          <p style={{ fontSize: "0.85rem", margin: 0 }}>Tải CERTAPPLE về điện thoại</p>
        </div>

        <div style={styles.chromeLogoBox}>
          <img src={chromeLogo} alt="Chrome Logo" style={styles.chromeLogoImage} />
        </div>
      </div>
    </section>
  );
}
