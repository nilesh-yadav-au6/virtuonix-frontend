import React, { useState } from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (inputValue: string) => void;
}

const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose, onSubmit }) => {
  const [inputValue, setInputValue] = useState<string>("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue("");
    onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="inputField">Update {title}</label>
          <input
            type="text"
            id="inputField"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            required
          />
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
