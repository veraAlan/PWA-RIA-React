import { useContext } from "react";
import Task from "../Task/Task";
import { TaskContext } from "../TaskContext/TaskContext";
import Title from "../Title/Title";
import style from "./TaskList.module.css";

export default function TodoList({ completed }) {
    const tasksLoaded = useContext(TaskContext);
    if (tasksLoaded.length) {
        const tasks = tasksLoaded.filter((task) => task.completed === completed);
        if (tasks[0] == null) {
            return <Title text="There are no tasks."></Title>

        } else {
            return <ul className={style.list}>
                {
                    tasks.map((task) => {
                        return <Task key={"task" + task.id} task={task} hasButtons={completed} />;
                    })
                }
            </ul>;
        }
    } else {
        return <Title text="There are no tasks."></Title>
    }
}