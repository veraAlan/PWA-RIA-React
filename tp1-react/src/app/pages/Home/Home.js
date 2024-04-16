import TodoList from "../../components/TodoList/TodoList.jsx";
import Title from "../../components/Title/Title.jsx";

// Check utility
import style from "./Home.module.css";

const Home = () => {
   return (
      <main>
         <Title text="Welcome, feel free to create new tasks!" />
         <div className={style.container}>
            <TodoList />
         </div>
      </main>
   );
}

export default Home;