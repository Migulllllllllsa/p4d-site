// src/components/Modal.js
import React from "react";

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <button className="absolute top-2 right-2 text-xl" onClick={onClose}>
          ✖
        </button>
        <h2 className="text-xl font-bold mb-4">{content.title}</h2>
        <p>{content.body}</p>
      </div>
    </div>
  );
};

export default Modal;
