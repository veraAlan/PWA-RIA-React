import { useContext, useState } from "react";
import { TaskDispatchContext } from "../TaskContext/TaskContext";
import Input from "../Input/Input";
import Button from "../Button/Button";
import create from "./CreateTask.module.css";

let nextId = 9;

export default function CreateTask() {
    const dispatch = useContext(TaskDispatchContext);
    const [inputValue, setInputValue] = useState('');

    return (<div className={create.container}>
        <Input placeholder="Write a description..."
            className={create.input}
            value={inputValue}
            onChangeHandler={e => setInputValue(e.target.value)}
        />
        <Button text="Create"
            className={create.btn}
            onClickFn={() => {
                setInputValue('');
                dispatch({
                    type: 'create',
                    id: nextId++,
                    info: inputValue,
                    completed: false
                });
            }}
        />
    </div>);
}