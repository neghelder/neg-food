import styles from "./Button.module.css";

const Button = ({ className, children, onClick }) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
