import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import "./ModalStyles.css";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  const modalContent = (
    <div className="modal-overlay" onClick={handleOutsideClick}>
      <div className="modal" ref={modalRef}>
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        <div className="center">
          <div className="tick-icon">✓</div>
        </div>
        <div className="center">
          <h2>Claimed Successfully</h2>
        </div>
        <div className="center">
          <p>
            You have successfully claimed 5,00,000 practice chips for today. Try
            again tomorrow.
          </p>
        </div>
        <div className="center">
          <button className="modal-button" onClick={closeModal}>
            Okay
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="content">
        <button className="open-modal-button" onClick={openModal}>
          Open Modal
        </button>
      </div>
      {isOpen &&
        ReactDOM.createPortal(
          modalContent,
          document.getElementById("modal-root")
        )}
    </>
  );
};

export default Modal;
