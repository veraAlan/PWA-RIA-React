import { useContext, useState } from "react";
import { TaskDispatchContext } from "../TaskContext/TaskContext.jsx";
import Input from "../Input/Input";
import Button from "../Button/Button";

let nextId = 3;

export default function CreateTask() {
    const dispatch = useContext(TaskDispatchContext);
    const [inputValue, setInputValue] = useState('');

    return (<div>
        <Input placeholder="This text"
            value={inputValue}
            onChangeHandler={e => setInputValue(e.target.value)}
        />
        <Button text="Create"
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
        <div>
            Contador
        </div>
    </div>);
}