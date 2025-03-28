import React from "react";



const ImagePopup = ({ isOpen, content = 'soft' | 'rental', onClose }) => {
  if (!isOpen) return null; // Se o modal não estiver aberto, não renderiza nada

  function returnByType() {
    if (content === 'soft') {
      return (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={onClose}>✖</button>
            <p>Soft</p>
          </div>
        </div>);
    } else {
      return (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={onClose}>✖</button>
            <p>Asset</p>
          </div>
        </div>)
    }
  }

  return returnByType()
};

export default ImagePopup;
