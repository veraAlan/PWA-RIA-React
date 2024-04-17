'use client';
import { useReducer } from 'react';
import Title from "../../components/Title/Title";
import TaskList from "../../components/TaskList/TaskList";
import CreateTask from "../../components/CreateTask/CreateTask";
import Counter from "../../components/Counter/Counter";
import Search from '../../components/Search/Search';
import { TaskContext, TaskDispatchContext } from '../../components/TaskContext/TaskContext';

// Check utility
import style from "./Home.module.css";

const initialTasks = [
   { id: 0, info: 'data 1', completed: true },
   { id: 1, info: 'data 2', completed: false },
   { id: 2, info: 'data 3', completed: false },
   { id: 3, info: 'data 4', completed: false },
   { id: 4, info: 'data 5', completed: true },
   { id: 5, info: 'data 6', completed: true },
   { id: 6, info: 'data 7', completed: false },
   { id: 7, info: 'data 8', completed: true },
   { id: 8, info: 'data 9', completed: false }
];

export default function Home() {
   const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

   return (
      <TaskContext.Provider value={tasks} className={style.base}>
         <TaskDispatchContext.Provider value={dispatch}>
            <Title text="Welcome, feel free to create new tasks!" />
            <div className={style.containerItem}>
               <CreateTask />
               <Counter />
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