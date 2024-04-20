import toast from "./Toast.module.css";

export default function Toast({ message, showToast }) {

   return (<span className={toast.container}>
      <p className={toast.text}>{message}</p>
      <span className={toast.loadingBar}></span>
   </span>);
}