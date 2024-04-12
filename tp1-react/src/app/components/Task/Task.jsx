const Task = (data, isCompleted) => {
   var completed = "IN PROGRESS";
   if (isCompleted) {
      completed = "DONE";
   } else {
      completed = "IN PROGRESS";
   }

   return (
      <div key={data}>{data} : {completed}</div>
   );
}

export default Task;