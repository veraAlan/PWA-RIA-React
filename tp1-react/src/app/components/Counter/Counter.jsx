import { useContext } from "react";
import { TaskContext } from "../TaskContext/TaskContext";
import counter from "./Counter.module.css";

export default function Counter() {
   const incomplete = useContext(TaskContext).filter((task) => task.completed == true).length;
   const complete = useContext(TaskContext).length - incomplete;

   return (<div className={counter.counter}>
      <span> Task Counter </span>
      <div className={counter.divValues}>
         <span className={counter.value}>Completed: {complete}</span>
         <span className={counter.value}>Incompleted: {incomplete}</span>
      </div>
   </div >);
}