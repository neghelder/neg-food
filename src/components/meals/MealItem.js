import { useContext } from "react";

import MealItemForm from "./MealItemForm";

import styles from "./MealItem.module.css";

import CartContext from "../../store/cart-context";

const MealItem = ({ name, description, price }) => {
  const cartContext = useContext(CartContext);

  function onAddMeal(amount) {
    let numAmount = parseInt(amount);

    if (numAmount <= 0) {
      return;
    }

    const meal = {
      name,
      amount: parseInt(amount),
      price: price,
    };

    cartContext.addItem({ id: meal.name.trim(), ...meal });
  }

  return (
    <div className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.price}>{price}</div>
      </div>
      <MealItemForm onConfirm={onAddMeal} />
    </div>
  );
};

export default MealItem;
