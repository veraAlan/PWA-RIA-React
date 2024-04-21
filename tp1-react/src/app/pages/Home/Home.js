'use client';
import { useReducer } from 'react';
import Title from "../../components/Title/Title";
import TaskList from "../../components/TaskList/TaskList";
import CreateTask from "../../components/CreateTask/CreateTask";
import Counter from "../../components/Counter/Counter";
import { TaskContext, TaskDispatchContext } from '../../components/TaskContext/TaskContext';
import { FaClipboardList } from "react-icons/fa";

// Check utility
import style from "./Home.module.css";

const initialTasks = [
   { id: 0, info: 'data 1', completed: true, inSearch: true },
   { id: 1, info: 'data 2', completed: false, inSearch: true },
   { id: 2, info: 'data 3', completed: false, inSearch: true },
   { id: 3, info: 'data 4', completed: false, inSearch: true },
   { id: 4, info: 'data 5', completed: true, inSearch: true },
   { id: 5, info: 'data 6', completed: true, inSearch: true },
   { id: 6, info: 'data 7', completed: false, inSearch: true },
   { id: 7, info: 'data 8', completed: true, inSearch: true },
   { id: 8, info: 'data 9', completed: false, inSearch: true }
];

export default function Home() {
   const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

   return (
      <TaskContext.Provider value={tasks}>
         <TaskDispatchContext.Provider value={dispatch}>
            <div className={style.container}>
               <Title text="Welcome, feel free to create new tasks!" icon={<FaClipboardList />} className={style.title} />
               <div className={style.containerItem}>
                  <CreateTask />
                  <Counter />
               </div>
               {/* Correct style, ir goes over the screen on the bottom of the list. */}
               <div className={`${style.containerItem} ${style.tasks}`}>
                  <TaskList completed={false} />
               </div>
               <div className={`${style.containerItem} ${style.tasks}`}>
                  <TaskList completed={true} />
               </div>
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
      case 'search':
         if (action.query) {
            console.log('Shoot query. | ',);
            return tasks.map((task) => {
               if (task.completed === action.completed) {
                  task.info.includes(action.query) ? task.inSearch = true : task.inSearch = false;
               }
               return task;
            });
         } else {
            console.log('Shoot null query. | ',);
            return tasks.map((task) => { task.inSearch = true; return task; });
         }
      default: {
         throw Error('Unknown action: ' + action.type);
      }
   }
}