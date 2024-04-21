import { useContext } from "react";
import Button from "../Button/Button";
import { TaskDispatchContext } from "../TaskContext/TaskContext";
import taskStyle from "./Task.module.css";
import { FaCheckCircle, FaMinusCircle, FaClipboardList } from "react-icons/fa";

export default function Task({ task, hasButtons }) {
   const dispatch = useContext(TaskDispatchContext);
   let state = "COMPLETED";
   let buttons = <></>;

   if (hasButtons === false) {
      state = "IN PROGRESS";
      buttons = <div className={taskStyle.btns}><Button text={<FaCheckCircle className={taskStyle.icon} />} className={taskStyle.btnTop} onClickFn={() => {
         dispatch({
            type: 'complete',
            id: task.id
         });
      }} />
         <Button text={<FaMinusCircle className={taskStyle.icon} />} className={taskStyle.btnBot} onClickFn={() => {
            dispatch({
               type: 'delete',
               id: task.id
            });
         }} /></div>;
   }

   return (<li className={taskStyle.card}>
      <span className={hasButtons ? taskStyle.taskCom : taskStyle.taskProc}>
         {hasButtons ? <FaClipboardList className={taskStyle.iconCom} /> : <FaClipboardList className={taskStyle.iconProc} />}
         {task.info} : {state}
      </span>
      {buttons}
   </li >);
}