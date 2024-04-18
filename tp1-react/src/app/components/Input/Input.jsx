import style from "./Input.module.css";

const Input = ({ value, placeholder, onChangeHandler, className }) => {
   return <input type="text" placeholder={placeholder} className={`${style.input} ${className}`} value={value} onChange={onChangeHandler} />;
};

export default Input;