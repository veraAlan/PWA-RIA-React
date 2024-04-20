import { useContext, useState } from "react";
import { TaskContext } from "../TaskContext/TaskContext";
import Input from "../Input/Input";
import Task from "../Task/Task";
import style from "./Search.module.css";

// Correct this so it can search the actual element of the task and the buttos can be used.
// Maybe create as a callback from TasskList. So it can replace the actual TaskList by the Queried list. 
export default function Search({ completed }) {
   const tasks = useContext(TaskContext).filter((task) => task.completed === completed);
   const [resultSearch, setResultSearch] = useState([]);

   function search(query) {
      setResultSearch(tasks.filter((task) => { return task.info.toLowerCase().includes(query.toLocaleLowerCase()) }));
   }

   return (<div className={style.searchbox}><Input placeholder='Search a task here...' className={style.input} onChangeHandler={(e) => {
      search(e.target.value);
   }} /><ul>
         {
            resultSearch.map((task) => {
               return <Task key={"task" + task.id} task={task} hasButtons={completed} />;
            })
         }
      </ul>
   </div>);
}