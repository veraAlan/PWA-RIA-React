import TodoList from "../../components/TodoList/TodoList.jsx";

// Check utility
import style from "./Home.module.css";

const Home = () => {
   return (
      <main>
         <div>
            This page is the home
         </div>
         <div className={style.container}>
            <TodoList />
         </div>
      </main>
   );
}

export default Home;