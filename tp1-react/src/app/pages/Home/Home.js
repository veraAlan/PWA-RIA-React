'use client';
import { useReducer } from 'react';
import Title from "../../components/Title/Title.jsx";
import TaskList from "../../components/TaskList/TaskList.jsx";
import CreateTask from "../../components/CreateTask/CreateTask.jsx";
import Search from '../../components/Search/Search.jsx';
import { TaskContext, TaskDispatchContext } from '../../components/TaskContext/TaskContext.jsx';

// Check utility
import style from "./Home.module.css";

const initialTasks = [
   { id: 0, info: 'data 1', completed: true },
   { id: 1, info: 'data 2', completed: false },
   { id: 2, info: 'data 3', completed: false }
];

export default function Home() {
   const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

   return (
      <TaskContext.Provider value={tasks} className={style.base}>
         <TaskDispatchContext.Provider value={dispatch}>
            <Title text="Welcome, feel free to create new tasks!" />
            <div className={style.containerItem}>
               <CreateTask />
            </div>
            <div className={style.containerItem}>
               <Search completed={false} />
               <TaskList completed={false} />
            </div>
            <div className={style.containerItem}>
               <Search completed={true} />
               <TaskList completed={true} />
            </div>
         </TaskDispatchContext.Provider>
      </TaskContext.Provider>
   );
}

function taskReducer(tasks, action) {
   switch (action.type) {
      case 'create':
         return [...tasks, {
            id: action.id,
            info: action.info,
            completed: false
         }];
      case 'complete':
         return tasks.map((task) => {
            if (task.id === action.id) {
               task.completed = true
            } return task;
         });
      case 'delete':
         return tasks.filter((task) => task.id !== action.id);
      default: {
         throw Error('Unknown action: ' + action.type);
      }
   }
}