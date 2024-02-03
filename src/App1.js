import { useState } from 'react'
import Header from './Components/Header'
import './index.sass'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask'

const App1 = () => {
  const [tasks, setTasks]=useState([
    {id:1,
    text:'visit IST',
    day:'Monday',
    reminder:true,
    },
    {id:2,
    text:'shopping',
    day:'Tuesday',
    reminder:false,
    },
    {id:3,
    text:'dinner',
    day:'Wednesday',
    reminder:true,
    },
    {id:4,
    text:'lunch',
    day:'Friday',
    reminder:false,
    },
  
  ])

  // Add Task

  const addTask=(task)=>{
    const id = Math.floor(Math.random()*10000)+1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // delete task

  const deltask=(id)=>{
    setTasks(tasks.filter((task)=>task.id!==id))
  }
  // toggle reminder

  const toggleReminder=(id)=>{
    setTasks(tasks.map((task)=>task.id===id ? 
    {...task,reminder:!task.reminder}:task))
  }
  return (
          
        <div className='container'>
          <Header Title= 'create form'/>
          <AddTask onAdd={addTask}/> 
          <Tasks
          tasks={tasks}
          onDelete={deltask}
          onToggle={toggleReminder}/>

        </div>
    
  )
}

export default App1;
