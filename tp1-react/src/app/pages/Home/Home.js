'use client';
import { useState } from "react";
import Task from "../../components/Task/Task.jsx";
import Input from "../../components/Input/Input.jsx";
import Button from "../../components/Button/Button.jsx";
import style from "./Home.module.css";

// Preload tasks data.
const data1 = { id: 0, info: "data n1", completed: false };
const data2 = { id: 1, info: "data n2", completed: false };
const data3 = { id: 2, info: "data n3", completed: false };
const data4 = { id: 3, info: "data n3", completed: true };
const preloadTaskList = [data1, data2, data3, data4];

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
         <div className={style.container}>
            <div className={style.containerItem}>
               <div className={style.createTask}>
                  <Input className={style.text} value={inputValue} onChangeHandler={onChangeHandler} />

                  <Button className={style.text} text="Create" onClickFn={createTask} />
               </div>
            </div>
            <div className={style.containerItem}>
               <ul className={style.list} >
                  {taskList.map((data) => {
                     return <li className={style.listItem} key={data.id}>{Task(data.info, data.completed)}
                        <Button className={style.text} text="Complete" onClickFn={() => updateTask(data.id)} />
                     </li>;
                  })}
               </ul>
            </div>
            <div className={style.containerItem}>
               <ul className={style.list}>

               </ul>
            </div>
         </div>
      </main>
   );
}

export default Home;