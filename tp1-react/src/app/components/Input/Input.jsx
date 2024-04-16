import style from "./Input.module.css";

const Input = ({ value, placeholder, onChangeHandler }) => {
   return <input type="text" placeholder={placeholder} className={style.input} value={value} onChange={onChangeHandler} />;
};

export default Input;