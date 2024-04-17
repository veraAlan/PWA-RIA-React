import { useContext, useState } from "react";
import { TaskContext } from "../TaskContext/TaskContext";
import Input from "../Input/Input";
import Task from "../Task/Task";
import style from "./Search.module.css";

export default function Search({ completed }) {
   const tasks = useContext(TaskContext).filter((task) => task.completed === completed);
   const [resultSearch, setResultSearch] = useState([]);

   function search(query) {
      setResultSearch(tasks.filter((task) => { return task.info.toLowerCase().includes(query.toLocaleLowerCase()) }));
   }

   return (<><Input placeholder='search' onChangeHandler={(e) => {
      search(e.target.value);
   }} /><ul className={style.searchbox}>
         {
            resultSearch.map((task) => {
               return <Task key={"task" + task.id} task={task} hasButtons={completed} />;
            })
         }
      </ul>
   </>);
}