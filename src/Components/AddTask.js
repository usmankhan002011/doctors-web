import React from 'react'
import { useState } from 'react'

const AddTask = () => {
    const[text, setText]=useState ('')
    const[Day, setDay]=useState ('')
    const[reminder, setReminder]=useState (false)
        
  return (
    <div className= 'form-control'>
        <label>
            Task
        </label>
        <input
        type='text'
        placeholder='Add Task'
        value='text'
        onChange={(e)=>setText(e.target.value)}
        />

    </div>
  )
}

export default AddTask