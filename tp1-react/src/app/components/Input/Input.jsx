import style from "./Input.module.css";

const Input = ({ value, placeholder, onChangeHandler, onKeyDownHandler, className }) => {
   return <input type="text" placeholder={placeholder} className={`${style.input} ${className}`} value={value} onChange={onChangeHandler} onKeyDown={onKeyDownHandler} />;
};

export default Input;