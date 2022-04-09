import ReactDOM from "react-dom";

import Card from "./card/Card";
import Button from "./Button";

import styles from "./Modal.module.css";

function Backdrop({ onClick }) {
  return <div className={styles.backdrop} onClick={onClick} />;
}

function ModalOverlay({ onConfirm, onClose, children }) {
  return (
    <Card className={styles.modal}>
      {children}
      <footer className={styles.actions}>
        <Button className={styles["btn-close"]} onClick={onClose}>
          Close
        </Button>
        <Button className={styles["btn-order"]} onClick={onConfirm}>
          Order
        </Button>
      </footer>
    </Card>
  );
}

function Modal({ onConfirm, onClose, children }) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onConfirm={onConfirm} onClose={onClose}>
          {children}
        </ModalOverlay>,
        document.getElementById("overlay-root")
      )}
    </>
  );
}

export default Modal;
