import { useContext, useState } from "react";
import { TaskDispatchContext } from "../TaskContext/TaskContext";
import Input from "../Input/Input";
import Button from "../Button/Button";
import create from "./CreateTask.module.css";
import Toast from "../Toast/Toast";

let nextId = 9;

export default function CreateTask() {
    const dispatch = useContext(TaskDispatchContext);
    const [inputValue, setInputValue] = useState('');

    const handleTaskCreate = () => {
        setInputValue('');
        dispatch({
            type: 'create',
            id: nextId++,
            info: inputValue,
            completed: false
        });
    }

    return (<div className={create.container}>
        <Toast message="Add a description to create a task." />
        <Input placeholder="Write a description..."
            className={create.input}
            value={inputValue}
            onKeyDownHandler={e => { if (e.key === 'Enter') handleTaskCreate(); }}
            onChangeHandler={e => { setInputValue(e.target.value) }}
        />
        <Button text="Create"
            className={create.btn}
            onClickFn={() => {
                if (inputValue !== '') {
                    handleTaskCreate();
                } else {
                    handleToast();
                }
            }}
        />
    </div>);
}