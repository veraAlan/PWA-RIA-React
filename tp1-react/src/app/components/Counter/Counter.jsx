import { useContext } from "react";
import { TaskContext } from "../TaskContext/TaskContext";
import counter from "./Counter.module.css";

export default function Counter() {
  //No deberia ser task.completed == false si son las incompletas?
  const incomplete = useContext(TaskContext).filter(
    (task) => task.completed == true
  ).length;
  const complete = useContext(TaskContext).length - incomplete;

  return (
    <div className={counter.counter}>
      <span className={counter.pill}>Completed: {complete}</span>
      <span className={counter.pill}>Incompleted: {incomplete}</span>
    </div>
  );
}
