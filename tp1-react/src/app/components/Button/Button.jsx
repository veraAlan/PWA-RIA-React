import style from "./Button.module.css";

const Button = ({ text, onClickFn, className }) => {
   return (
      <button onClick={onClickFn} className={`${style.button}  ${className}`}>
         {text}
      </button>
   );
};

export default Button;