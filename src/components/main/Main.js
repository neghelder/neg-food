import styles from "./Main.module.css";
import meals_image from "./meals.jpg";

import MealSummary from "../meals/MealSummary";
import AvailableMeals from "../meals/AvailableMeals";

const Main = () => {
  return (
    <main>
      <div className={styles["main-image"]}>
        <img className={styles["main-image"]} src={meals_image} alt="Meals" />
      </div>
      <MealSummary />
      <AvailableMeals />
    </main>
  );
};

export default Main;
