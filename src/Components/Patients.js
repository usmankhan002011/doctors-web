import React from 'react'
import Patient from './Patient'
const Patients = ({patients, onDelete, onToggle}) => {
    return (
        <div
        //   className={`two"}`}
        >
          {patients.map((patient) => (
            <Patient
              key={patient.id}
              patient={patient}
              onDelete={onDelete}
              onToggle={onToggle}
         
            />
          ))}
        </div>
      );

}

export default Patients