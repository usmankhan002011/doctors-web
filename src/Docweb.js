import { useState } from 'react'
import Header from './Components/Header'
import './Docweb.sass'
import Patients from './Components/Patients'
import AddPatient from './Components/AddPatient'

const Docweb = () => {
   const [showAddPatient, setShowAddPatient]=useState(false)
   const [patients, setPatients]=useState([
    { id:1,
      name:'andila andokan',
      age:'30',
      M:'y',
      PG:'n',
      MG:'2',
      mobile:'03215131184',
      reminder:true,
    },
    { id:2,
      name:'raheela bibi',
      age:'25',
      M:'n',
      PG:'y',
      MG:'0',
      mobile:'03215131184',
      reminder:false,
    },
    
  ])

  // Add Patient

  const addPatient=(patient)=>{
    const id = Math.floor(Math.random()*10000)+1
    const newPatient = {id, ...patient}
    setPatients([...patients, newPatient])
  }

  // delete patient

  const delPatient=(id)=>{
    setPatients(patients.filter((patient)=>patient.id!==id))
  }
  // toggle reminder

  const toggleReminder=(id)=>{
    setPatients(patients.map((patient)=>patient.id===id ? 
    {...patient,reminder:!patient.reminder}:patient))
  }
  return (
          
        <div className='container'>
          <Header title= 'Patient Registration' 
          onAdd={()=>{setShowAddPatient (!showAddPatient)}}
          togAddColor={!showAddPatient}
          />
          {/* <AddTask onAdd={addTask}/>  */}
          {showAddPatient && <AddPatient onAdd={addPatient} />}
          <Patients
            patients={patients}
            onDelete={delPatient}
            onToggle={toggleReminder}/>

        </div>
    
  )
}

export default Docweb;
