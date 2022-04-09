import { useContext } from "react";

import CartItem from "./CartItem";

import styles from "./Cart.module.css";

import CartContext from "../../store/cart-context";

const Cart = () => {
  const cartContext = useContext(CartContext);
  return (
    <>
      <ul className={styles["cart-items"]}>
        {Array.from(cartContext.items.values()).map((item) => {
          return (
            <CartItem
              key={item.name.trim()}
              name={item.name}
              price={item.price}
              amount={item.amount}
              onAdd={cartContext.addItem}
              onRemove={cartContext.removeItem}
            />
          );
        })}
      </ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>$ {cartContext.totalPrice}</span>
      </div>
    </>
  );
};

export default Cart;
