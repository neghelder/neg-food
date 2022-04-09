import { useContext } from "react";

import styles from "./HeaderCartButton.module.css";

import { FaShoppingCart } from "react-icons/fa";

import CartContext from "../../store/cart-context";

const HeaderCartButton = ({ onClick }) => {
  const cartContext = useContext(CartContext);
  return (
    <button className={`${styles.button} ${styles.bump}`} onClick={onClick}>
      <FaShoppingCart className={styles.icon} />
      <span>Your Cart</span>
      <div className={styles.badge}>{cartContext.totalSize}</div>
    </button>
  );
};

export default HeaderCartButton;
