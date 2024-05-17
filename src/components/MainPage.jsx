import React from 'react'
const MainPage = ({ ToDoList }) => {
  console.log(ToDoList)

   return (
    <div className='main-page'>
      <div className="search-bar">
        <input type="text" placeholder='search task'/>
      </div>
      <div className="tasks">
        {ToDoList.map( todo => {
          return(
          <div className="task" key={todo}>
          <h3>{todo}</h3>
          <button className='btn1' >Delete</button>
          <button className='btn2'>Complete</button>
        </div>

          )
        })
        }
        
      </div>
    </div>
  )
}

export default MainPage
