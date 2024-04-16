const createTask = (taskList) => {
    setNextId(nextId + 1);
    const newTask = {
        id: nextId,
        info: inputValue,
        completed: false
    };
    setTaskState([...taskList, newTask]);
};