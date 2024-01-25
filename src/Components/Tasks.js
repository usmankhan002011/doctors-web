import React from 'react'
import Task from './Task'
const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        <div
        //   className={`two"}`}
        >
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onDelete={onDelete}
              onToggle={onToggle}
            //   onToggle={onToggle}
            />
          ))}
        </div>
      );
//   return (
//     {tasks.map((task)=>(
//         <Task
//             key={task.id}
//             task={task}
//             onDelete={onDelete}

//         />
//     ))}
//   )
}

export default Tasks