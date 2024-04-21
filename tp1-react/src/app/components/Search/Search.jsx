import { useContext } from "react";
import { TaskDispatchContext } from "../TaskContext/TaskContext";
import Input from "../Input/Input";
import style from "./Search.module.css";

// Correct this so it can search the actual element of the task and the buttos can be used.
// Maybe create as a callback from TasskList. So it can replace the actual TaskList by the Queried list. 
export default function Search({ completed }) {
   const dispatch = useContext(TaskDispatchContext);

   return (<div className={style.searchbox}><Input
      placeholder='Search a task here...'
      className={style.input}
      onChangeHandler={(e) => {
         dispatch({
            type: 'search',
            query: e.target.value,
            completed: completed
         });
      }} />
   </div>);
}