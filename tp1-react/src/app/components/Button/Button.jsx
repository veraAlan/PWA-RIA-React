import style from "./Button.module.css";

const Button = ({ text, onClickFn }) => {
   return (
      <button onClick={onClickFn} className={style.button}>
         {text}
      </button>
   );
};

export default Button;