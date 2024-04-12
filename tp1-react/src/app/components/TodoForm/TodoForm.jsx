import {useState} from 'react'

const TodoForm = () => {

    const [value, setValue] = useState("")

    const handleSubmit = e =>{
        e.preventDefault();
    }

    return (

        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text' className='todo-input' placeholder='add task' onChange={(e) => setValue(e.target.value)}/>
            <button type='submit' className='todo-btn'>Add new task</button>
        </form>
    )
}

export default TodoForm;