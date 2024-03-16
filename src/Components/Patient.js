import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Patient = ({patient,onDelete, onToggle}) => {
  return (
    <div
        className={`patient $ {patient.reminder ? 'togglereminder' : ''}`}
        onDoubleClick={()=>onToggle(patient.id)}
    > 
        <h3>patient name: {''}  
        {''}{patient.name}{''}
        <FaTimes
            style={{color:'red',cursor:'pointer'}}
            onClick={()=>onDelete(patient.id)}
        />
        </h3>
        {/* <div> */}
        <p className='p'> age:  {patient.age}{'   '}</p>
        <p className='p'>multigravida: {patient.M}</p>
        <p className='p'>primarygravida: {patient.PG}</p>
        <h4>children before: {patient.MG}</h4>
        <h4>mobile: {patient.mobile}</h4>
        {/* </div> */}
    </div>
  )
}

export default Patient