import styles from "./Input.module.css";

const Input = ({ label, value, onChange }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={label}>{label}</label>
      <input id={label} value={value} type="number" onChange={onChange} />
    </div>
  );
};

export default Input;
