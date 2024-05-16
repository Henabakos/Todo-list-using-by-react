import React from 'react'
import { usestate } from "react"
import SideBar from './SideBar'

const MainPage = () => {
   return (
    <div className='main-page'>
      <div className="search-bar">
        <input type="text" placeholder='search task'/>
      </div>
      <div className="tasks">
        {ToDoList.map((task)=>{
          return (
            <div className="task">
                <h4>{task}</h4>
                <button>delete task</button>
                <button>Completed</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MainPage
