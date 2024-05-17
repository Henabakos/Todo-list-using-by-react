import React, { useState } from 'react'
import SideBar from './components/SideBar'
import MainPage from './components/MainPage'
import './App.css'

const App = () => {
  const [ToDoList,setNewTodolist] = useState([])
  const helper = (data) =>{
    setNewTodolist([...ToDoList,data])
  }
  return (
    <div className='App'>
      <SideBar helper = {helper} />
      <MainPage ToDoList = {ToDoList}/>
    </div>
  )
}

export default App
