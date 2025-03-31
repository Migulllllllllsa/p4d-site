/* eslint-disable react/prop-types */
import logoAc from "../assets/images/logo-ac.png";
import logoSr from "../assets/images/logo-sr.png";

const ImagePopup = ({ isOpen, content = "soft" | "rental", onClose }) => {
  if (!isOpen) return null; // Se o modal não estiver aberto, não renderiza nada

  function returnByType() {
    if (content === "soft") {
      return (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={onClose}>
              ✖
            </button>
            <img
              className="soft-modal"
              src={logoSr}
              alt="soft rental"
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={onClose}>
              ✖
            </button>
            <img
              className="asset-modal"
              src={logoAc}
              alt="asset control"
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      );
    }
  }

  return returnByType();
};

export default ImagePopup;
