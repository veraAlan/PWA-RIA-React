'use client';
import { useState } from 'react';
import Input from '../Input/Input.jsx';
import Button from '../Button/Button.jsx';
import Task from '../Task/Task.jsx';

// Refactor.
import style from '../../pages/Home/Home.module.css';

const TodoForm = () => {
    const [taskList, setTaskState] = useState([]);
    const [doneTaskList, setDoneTaskState] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [nextId, setNextId] = useState(0);
    const onChangeHandler = (event) => { setInputValue(event.target.value); };

    const createTask = () => {
        setNextId(nextId + 1);
        const newTask = {
            id: nextId,
            info: inputValue,
            completed: false
        };
        setTaskState([...taskList, newTask]);
    };

    const updateTask = (id) => {
        const index = taskList.findIndex(task => task.id === id);
        let updatedTask = taskList[index];
        updatedTask.completed = true;
        let updatedTaskList = taskList;
        updatedTaskList.splice(index, 1);
        setTaskState(updatedTaskList);
        setDoneTaskState([...doneTaskList, updatedTask]);
    };

    const eliminateTask = (idEliminate) => {
        const newTaskList = taskList.filter((task) => task.id !== idEliminate);
        setTaskState(newTaskList);

    };


    return (
        <>
            <div className={style.containerItem}>
                <div className={style.createTask}>
                    <Input className={style.text} placeholder="This text" value={inputValue} onChangeHandler={onChangeHandler} />

                    <Button className={style.text} text="Create" onClickFn={createTask} />
                </div>
                <div>
                    Contador
                </div>
            </div>
            <div className={style.containerItem}>
                <ul className={style.list} >
                    {
                        taskList.map((data) => {
                            return <li className={style.listItem} key={data.id}>{Task(data.info, data.completed)}
                                <Button className={style.text} text="Complete" onClickFn={() => updateTask(data.id)} />
                                <Button className={style.text} text="Eliminate" onClickFn={() => eliminateTask(data.id)} />
                            </li>;
                        })
                    }
                </ul>
            </div>
            <div className={style.containerItem}>
                <ul className={style.list}>
                    {
                        doneTaskList.map((data) => {
                            return <li className={style.listItem} key={data.id}>{Task(data.info, data.completed)}</li>;
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default TodoForm;