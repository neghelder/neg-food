import { useState } from "react";

import styles from "./MealItemForm.module.css";

import Button from "../UI/Button";
import Input from "../UI/Input";

const MealItemForm = ({ onConfirm }) => {
  const [amount, setAmount] = useState(0);

  function onConfirmAmount(evt) {
    evt.preventDefault();
    onConfirm(amount);
  }
  function onChange(evt) {
    const value = evt.target.value;
    if (value > 0) {
      setAmount(value);
    }
  }

  return (
    <form className={styles.form}>
      <Input label="Amount" value={amount} onChange={onChange}></Input>
      <Button onClick={onConfirmAmount}>+ Add</Button>
    </form>
  );
};

export default MealItemForm;
