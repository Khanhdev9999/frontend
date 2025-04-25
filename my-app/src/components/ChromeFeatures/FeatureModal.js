"use client"
import "./FeatureModal.css"

function FeatureModal(props) {
  const { feature, onClose } = props

  // Ngăn chặn sự kiện click từ bên trong modal lan ra ngoài overlay
  function handleModalClick(e) {
    e.stopPropagation()
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={handleModalClick}>
        <button className="modal-close-button" onClick={onClose}>
          ×
        </button>

        <div className="modal-image-container">
          <img
            src={feature.image || "https://via.placeholder.com/600x400?text=Chrome+Feature"}
            alt={feature.title}
            className="modal-image"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/600x400?text=Chrome+Feature"
            }}
          />
        </div>

        <div className="modal-content">
          <h2 className="modal-title">{feature.title}</h2>
          <p className="modal-description">{feature.fullDescription}</p>

          <div className="modal-actions">
            <button className="modal-action-button primary">Tìm hiểu thêm</button>
            <button className="modal-action-button secondary" onClick={onClose}>
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureModal;
