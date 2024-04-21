import { useContext } from "react";
import { TaskContext } from "../TaskContext/TaskContext";
import Task from "../Task/Task";
import Title from "../Title/Title";
import Search from "../Search/Search";
import style from "./TaskList.module.css";
import { FaAngleDoubleDown } from "react-icons/fa";

export default function TodoList({ completed }) {
    const tasksLoaded = useContext(TaskContext);

    if (tasksLoaded.length) {
        const tasks = tasksLoaded.filter((task) => task.completed === completed);
        if (tasks[0] == null) {
            return <Title text="There are no tasks."></Title>
        } else {
            return <ul className={style.list}>
                <span className={style.titleContainer}><FaAngleDoubleDown /> <Title text={completed ? "Completed" : "Ongoing"} className={style.title} /> <FaAngleDoubleDown /></span>
                <Search completed={completed} />
                {
                    tasks.map((task) => {
                        if (task.inSearch) {
                            return <Task key={"task" + task.id} task={task} hasButtons={completed} />;
                        }
                    })
                }
            </ul>;
        }
    } else {
        return <Title text="There are no tasks."></Title>
    }
}