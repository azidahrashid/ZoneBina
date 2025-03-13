import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import clsx from "clsx";

const MODAL_SIZES = {
  small: "modal-size-small",
  medium: "modal-size-medium",
  large: "modal-size-large",
  "extra-large": "modal-size-extra-large",
  custom: ""
};

const MODAL_POSITIONS = {
  top: "modal-position-top",
  bottom: "modal-position-bottom",
  "top-right": "modal-position-top-right",
  "top-left": "modal-position-top-left",
  "bottom-right": "modal-position-bottom-right",
  "bottom-left": "modal-position-bottom-left",
  center: "modal-position-center",
};

const Modal = ({ isOpen, onClose, size = "medium", position = "top", customSize = "", children, modalId }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="modal-backdrop">
      {/* Clickable backdrop */}
      <div className="position-absolute inset-0" onClick={() => onClose(modalId)} />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.1 }}
        className={clsx(
          "modal-container",
          MODAL_SIZES[size] || customSize,
          MODAL_POSITIONS[position]
        )}
      >
        {/* Close Button */}
        <button className="modal-close-btn text-SecondaryText" onClick={() => onClose(modalId)}>
          <X size={20} />
        </button>

        {/* Modal Content */}
        {children}
      </motion.div>
    </div>,
    document.body
  );
};

export default Modal;
