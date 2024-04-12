import style from "./Input.module.css";

const Input = ({ value, onChangeHandler }) => {
   return <input type="text" className={style.input} value={value} onChange={onChangeHandler} />;
};

export default Input;