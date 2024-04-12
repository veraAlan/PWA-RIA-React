'use client';
import { useState } from "react";
import Task from "../../components/Task/Task.jsx";
import Input from "../../components/Input/Input.jsx";
import Button from "../../components/Button/Button.jsx";

// Preload tasks data.
const data1 = { id: 0, info: "data n1", completed: false };
const data2 = { id: 1, info: "data n2", completed: false };
const data3 = { id: 2, info: "data n3", completed: false };
const preloadTaskList = [data1, data2, data3];

// Set initial id at the last item of array.
// If the numeration changes, this is the place to set first value correspoding new method.
let preloadId = Number([preloadTaskList.length - 1]) + 1;;

const Home = () => {
   const [inputValue, setInputValue] = useState("");
   const [taskList, setTaskState] = useState(preloadTaskList);
   const [nextId, setNextId] = useState(preloadId);

   const updateTask = (index) => {
      const updatedTask = [...taskList];
      (updatedTask[index]).completed = true;
      setTaskState(updatedTask);
   };

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

   return (
      <main>
         <div>
            This page is the home
         </div>
         <div>
            <Input value={inputValue} onChangeHandler={onChangeHandler} />

            <Button text="Create" onClickFn={createTask} />
         </div>
         <br />
         <ul>
            {taskList.map((data) => {
               return <li key={data.id}>{Task(data.info, data.completed)}
                  <Button text="Complete" onClickFn={() => updateTask(data.id)} />
               </li>;
            })}
         </ul>
      </main>
   );
}

export default Home;