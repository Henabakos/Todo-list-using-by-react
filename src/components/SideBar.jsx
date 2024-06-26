import React, { useState } from 'react'

const SideBar = (props) => {
  
  const [show,setShow] = useState(false);
  const [Newtask,setNewtask] = useState("")
  // const [ToDoList,setNewTodolist] = useState([])
  const ShowHide =()=>{
    setShow(!show)
  }
  const handleChange = (event) =>{
    setNewtask(event.target.value);
    console.log(Newtask)
  }

  const addTask = () =>{
    props.helper(Newtask)
    setShow(!show)
  }

  return (
    <div className='Sidebar'>
      <h1>To Do List</h1>
      <div className='add-btn'><button onClick={ShowHide}>+</button>Add Task</div>
      {show === true && <div className="showhide">
        <input type="text" placeholder='write task you want to complete ' onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>}
    </div>
  )
}

export default SideBar
