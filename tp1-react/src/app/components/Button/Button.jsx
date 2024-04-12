const Button = ({ text, onClickFn }) => {
   return (
      <button onClick={onClickFn}>
         {text}
      </button>
   );
};

export default Button;