import React from "react";

const ProductModal = ({ isVisible, onClose, children }) => {
  const handleClose = (e) => {
    const target = e.target;
    if (target.id === "container") onClose();
  };

  if (!isVisible) return null;

  return (
    <div
      onClick={handleClose}
      id="container"
      className="fixed inset-0  bg-black bg-opacity-30 backdrop-blur-sm z-[9999] flex items-center justify-center duration-300 transition-all"
    >
      {children}
    </div>
  );
};

export default ProductModal;
