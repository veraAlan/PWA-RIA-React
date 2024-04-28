import { createContext } from "react";

//Esto no es un componente, no deberia estar en la carpeta de components. Podrian crear una nueva carpeta Contexts, o directamente utilizarlo en Home.

export const TaskContext = createContext(null);
export const TaskDispatchContext = createContext(null);
