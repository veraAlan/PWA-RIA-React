"use client";
import { useReducer } from "react";
import Title from "../../components/Title/Title";
import TaskList from "../../components/TaskList/TaskList";
import CreateTask from "../../components/CreateTask/CreateTask";
import Counter from "../../components/Counter/Counter";
import {
  TaskContext,
  TaskDispatchContext,
} from "../../components/TaskContext/TaskContext";
import { FaClipboardList } from "react-icons/fa";

// Check utility
import style from "./Home.module.css";

//Muy buen trabajo. El codigo esta muy bien organizado muy limpio y facil de leer.
//Variables y funciones bien nombradas, buen variables de css.
//Que este en ingles es un plus por si quieren agregarlo a su portfolio.

//Hay algunos bugs:
//Cuando se crea una nueva tarea no se esta reflejando inmediatamente en la lista de 'on-going'. Tengo primero que hacer una busqueda para poder encontrar mi tarea recien creada.
//Cuando se crea una nueva tarea se suma 1 al contador de completadas por mas que el state este en completed: false.

//No era necesario el uso del reducer para resolver el trabajo, creo que se complicaron por demas ahi.
//No es un error, solamente creo que les debio llevar mas tiempo del esperado resolverlo de esta manera.
//Podrian agregar algunas imagenes de como se ve la aplicacion corriendo al readme?

const initialTasks = [
  { id: 0, info: "Task 1", completed: true, inSearch: true },
  { id: 1, info: "Task 2", completed: false, inSearch: true },
  { id: 2, info: "Task 3", completed: false, inSearch: true },
  { id: 3, info: "Task 4", completed: false, inSearch: true },
  { id: 4, info: "Task 5", completed: true, inSearch: true },
  { id: 5, info: "Task 6", completed: true, inSearch: true },
  { id: 6, info: "Task 7", completed: false, inSearch: true },
  { id: 7, info: "Task 8", completed: true, inSearch: true },
  { id: 8, info: "Task 9", completed: false, inSearch: true },
];

export default function Home() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  console.log("task: ", tasks);

  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        <div className={style.container}>
          <Title
            text="Welcome, feel free to create new tasks!"
            icon={<FaClipboardList />}
            className={style.title}
          />
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
    case "create":
      return [
        ...tasks,
        {
          id: action.id,
          info: action.info,
          completed: false,
        },
      ];
    case "complete":
      return tasks.map((task) => {
        if (task.id === action.id) {
          task.completed = true;
        }
        return task;
      });
    case "delete":
      return tasks.filter((task) => task.id !== action.id);
    case "search":
      if (action.query) {
        return tasks.map((task) => {
          if (task.completed === action.completed) {
            task.info.includes(action.query)
              ? (task.inSearch = true)
              : (task.inSearch = false);
          }
          return task;
        });
      } else {
        return tasks.map((task) => {
          task.inSearch = true;
          return task;
        });
      }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
