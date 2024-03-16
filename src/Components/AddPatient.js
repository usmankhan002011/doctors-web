import React from 'react'
import { useState } from 'react'

const AddPatient = ({onAdd}) => {
    const[name, setName]=useState ('')
    const[age, setAge]=useState ('')
    // const[M, setM]=useState (true)
    const[M, setM]=useState ('')
    const[PG, setPG]=useState ('')
    const[reminder, setReminder]=useState (false)
    const[MG, setMG]=useState ('')
    const[mobile, setMobile]=useState ('')
    
    const onSubmit = (e)=> {
        e.preventDefault()
        if(!name){alert('please add a patient') 
        return
        }
    
        onAdd({name, age, M, PG, MG, mobile,reminder})
        setName('')
        setAge('')
        setM('')
        setPG('')
        setMG('')
        setMobile('')
        setReminder(false)
    }

    
  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Patient</label>
            <input
                type='text'
                placeholder='Add Patient Name'
                value={name}
                onChange={(e) => setName(e.target.value)} />

        </div>
        <div className='form-control'>
            <label>Age</label>
            <input
                type='text'
                placeholder='Age'
                value={age}
                onChange={(e) => setAge(e.target.value)} />

        </div>
        <div className='form-control'>
            <label>Married</label>
            <input
                type='text'
                placeholder='Married Y/N'
                value={M}
                onChange={(e) => setM(e.target.value)} />

        </div>
        <div className='form-control'>
            <label>PRIMIGRAVIDA</label>
            <input
                type='text'
                placeholder='Primigravida Y/N'
                value={PG}
                onChange={(e) => setPG(e.target.value)} />

        </div>
        <div className='form-control'>
            <label>children</label>
            <input
                type='text'
                placeholder='Number of children'
                value={MG}
                onChange={(e) => setMG(e.target.value)} />

        </div>
        <div className='form-control'>
            <label>Contact</label>
            <input
                type='text'
                placeholder='Add Mobile'
                value={mobile}
                onChange={(e) => setMobile(e.target.value)} />

        </div>
        <div className='form-control form-control-check'>
            <label>Set reminder</label>
            <input
                type='CheckBox'
                checked={reminder}
                value={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)} />

        </div>
        <input type='submit' value='SavePatient' className='btn btn-block'/>
    </form>
  )
}

export default AddPatient