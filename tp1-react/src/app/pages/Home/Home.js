import Task from "../../components/Task/Task.js";

function loadTasks(listOfTasks) {
   var elemHTML = "";
   listOfTasks.forEach(element => {
      elemHTML += element;
   });

   return elemHTML;
}

const Home = () => {
   const tasks = ["data1", "data2", "data3"];

   const elems = loadTasks(tasks);

   return (
      <main>
         <div>
            This page is the home
         </div>
         <ul>
            <li>{elems}</li>
         </ul>
      </main>
   );
}

export default Home;