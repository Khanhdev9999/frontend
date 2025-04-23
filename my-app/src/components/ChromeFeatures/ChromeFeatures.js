import { useState } from "react"
import "./ChromeFeatures.css"
import FeatureModal from "./FeatureModal"

// Import images from src/assets/images
import imgCheckout from "../../assets/images/digital-checkout.png"
import imgLens from "../../assets/images/google-lens-shopping-search.png"
import imgGemini from "../../assets/images/chrome-gemini-sidebar.png"
import imgToolbar from "../../assets/images/chrome-custom-toolbar.png"
import imgSuggestions from "../../assets/images/search-suggestions-interface.png"
import imgPrivacy from "../../assets/images/chrome-privacy-dashboard.png"

function ChromeFeatures() {
  // Khai báo state để theo dõi tính năng được chọn
  const [selectedFeature, setSelectedFeature] = useState(null)

  // Dữ liệu tính năng
  const features = [
    {
      id: 1,
      title: "Thanh toán nhanh và an toàn hơn",
      description: "Điền đầy đủ thông tin thẻ thanh toán theo cách an toàn hơn",
      image: imgCheckout,
      fullDescription:
        "Chrome giúp bạn thanh toán nhanh chóng và an toàn hơn bằng cách tự động điền thông tin thẻ thanh toán của bạn. Tính năng này được mã hóa và bảo vệ bởi Google...",
    },
    {
      id: 2,
      title: "Tìm kiếm về mọi thứ bạn thấy trên web",
      description: "Google Ống kính trong Chrome giúp bạn dễ dàng tìm kiếm",
      image: imgLens,
      fullDescription:
        "Với Google Ống kính tích hợp trong Chrome, bạn có thể tìm kiếm thông tin về bất kỳ hình ảnh nào bạn thấy trên web...",
    },
    {
      id: 3,
      title: "Trò chuyện với Gemini trên thanh bên",
      description: "Nhờ có lối tắt mới này trong Chrome, bạn có thể trò chuyện",
      image: imgGemini,
      fullDescription:
        "Chrome giờ đây tích hợp Gemini AI vào thanh bên, cho phép bạn trò chuyện và đặt câu hỏi mà không cần rời khỏi trang web hiện tại...",
    },
    {
      id: 4,
      title: "Ghim tính năng bạn yêu thích vào thanh công cụ",
      description: "Bạn có thể ghim các tính năng yêu thích thường xuyên sử dụng",
      image: imgToolbar,
      fullDescription:
        "Chrome cho phép bạn tùy chỉnh thanh công cụ bằng cách ghim các tính năng bạn sử dụng thường xuyên...",
    },
    {
      id: 5,
      title: "Tìm kiếm và nhận gợi ý có liên quan",
      description: "Nhận đề xuất trong hộp tìm kiếm có liên quan đến nội dung",
      image: imgSuggestions,
      fullDescription:
        "Chrome cung cấp gợi ý tìm kiếm thông minh dựa trên nội dung bạn đang xem...",
    },
    {
      id: 6,
      title: "Kiểm tra quyền riêng tư và tính bảo mật",
      description: "Chrome sẽ thông báo khi có đề xuất về an toàn và bảo mật",
      image: imgPrivacy,
      fullDescription:
        "Chrome cung cấp bảng điều khiển quyền riêng tư và bảo mật toàn diện, giúp bạn kiểm soát dữ liệu của mình...",
    },
  ]

  // Hàm mở modal
  function openModal(feature) {
    setSelectedFeature(feature)
  }

  // Hàm đóng modal
  function closeModal() {
    setSelectedFeature(null)
  }

  // Render component
  return (
    <div className="chrome-features-container">
      <div className="features-grid">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <div className="feature-image-container">
              <img
                src={feature.image || "https://via.placeholder.com/300x200?text=Chrome+Feature"}
                alt={feature.title}
                className="feature-image"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/300x200?text=Chrome+Feature"
                }}
              />
            </div>
            <div className="feature-content">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <button
                className="feature-button"
                onClick={() => {
                  openModal(feature)
                }}
              >
                <span className="plus-icon">+</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="see-more-container">
        <button className="see-more-button">
          Xem thêm <span className="arrow-icon">→</span>
        </button>
      </div>

      {selectedFeature !== null && <FeatureModal feature={selectedFeature} onClose={closeModal} />}
    </div>
  )
}

export default ChromeFeatures
