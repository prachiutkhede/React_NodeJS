import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import "./modal.css";
import { EscHook } from "./EscHook";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;
  const modalRoot = document.getElementById("modal-root")!;

  EscHook({ isOpen, onClose });

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          x
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};
