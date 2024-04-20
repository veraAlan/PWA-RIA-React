import style from "./Title.module.css";

const Title = ({ text, className, icon }) => {
   return (
      <h1 className={`${style.title} ${className}`}>
         {icon} {text}
      </h1>
   );
};

export default Title;