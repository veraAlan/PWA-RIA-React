import { useContext } from "react";
import Button from "../Button/Button.jsx";
import { TaskDispatchContext } from "../TaskContext/TaskContext.jsx";

export default function Task({ task, hasButtons }) {
   const dispatch = useContext(TaskDispatchContext);
   let state = "COMPLETED";
   let buttons = <></>;

   if (hasButtons === false) {
      state = "IN PROGRESS";
      buttons = <><Button text="Complete" onClickFn={() => {
         dispatch({
            type: 'complete',
            id: task.id
         });
      }} />
         <Button text="Delete" onClickFn={() => {
            dispatch({
               type: 'delete',
               id: task.id
            });
         }} /></>;
   }

   return (<li>
      {task.info} : {state}
      {buttons}
   </li >);
}