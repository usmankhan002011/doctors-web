import { useState } from 'react'
import Header from './Components/Header'
import './index.sass'

import AddTask from './Components/AddTask'

const App1 = () => {
  const [tasks, setTasks]=useState([
    {id:1,
    text:'visit IST',
    Day:'Monday',
    reminder:true,
    },
    {id:2,
    text:'shopping',
    Day:'Tuesday',
    reminder:false,
    },
    {id:3,
    text:'dinner',
    Day:'Wednesday',
    reminder:true,
    },
    {id:4,
      text:'lunch',
      Day:'Friday',
      reminder:false,
    },
  
  ])

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
          <Tasks
          tasks={tasks}
          onDelete={deltask}
          onToggle={toggleReminder}/>

        </div>
    
  )
}

export default App1;
