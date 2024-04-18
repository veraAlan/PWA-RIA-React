import { useContext } from "react";
import Button from "../Button/Button";
import { TaskDispatchContext } from "../TaskContext/TaskContext";
import taskStyle from "./Task.module.css";

export default function Task({ task, hasButtons }) {
   const dispatch = useContext(TaskDispatchContext);
   let state = "COMPLETED";
   let buttons = <></>;

   if (hasButtons === false) {
      state = "IN PROGRESS";
      buttons = <div className={taskStyle.btns}><Button text="Complete" className={taskStyle.btnTop} onClickFn={() => {
         dispatch({
            type: 'complete',
            id: task.id
         });
      }} />
         <Button text="Delete" className={taskStyle.btnBot} onClickFn={() => {
            dispatch({
               type: 'delete',
               id: task.id
            });
         }} /></div>;
   }

   return (<li className={taskStyle.card}>
      <span className={hasButtons ? taskStyle.taskCom : taskStyle.taskProc}> {task.info} : {state}</span>
      {buttons}
   </li >);
}