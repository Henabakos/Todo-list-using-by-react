import React, { useState } from 'react'

const SideBar = () => {
  const [show,setShow] = useState(false);
  const [Newtask,setNewtask] = useState("")
  const [ToDoList,setNewTodolist] = useState([])
  const ShowHide =()=>{
    setShow(!show)
  }
  const handleChange = (event) =>{
    setNewtask(event.target.value);
  }
  const addTask = () =>{
    setNewTodolist([...ToDoList,Newtask])
  }

  return (
    <div className='Sidebar'>
      <h1>To Do List</h1>
      <div className='add-btn'><button onClick={ShowHide}>+</button>New Task</div>
      {show === true && <div className="showhide">
        <input type="text" placeholder='write task you want to complete ' onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>}
      
    </div>
  )
}

export default SideBar
