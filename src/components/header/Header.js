import { useState } from "react";

import styles from "./Header.module.css";

import HeaderCartButton from "./HeaderCartButton";
import Modal from "../UI/Modal";
import Cart from "../cart/Cart";

const Header = () => {
  const [showCart, setShowCart] = useState(false);

  function onClickCartButton() {
    setShowCart(true);
  }

  function onConfirmOrder() {
    setShowCart(false);
    console.log("confirm order");
  }

  function onCloseOrderModal() {
    setShowCart(false);
  }

  return (
    <header className={styles.header}>
      <h1>ReactMeals</h1>
      <HeaderCartButton onClick={onClickCartButton} />
      {showCart && (
        <Modal onConfirm={onConfirmOrder} onClose={onCloseOrderModal}>
          <Cart></Cart>
        </Modal>
      )}
    </header>
  );
};

export default Header;
