import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title, onAdd, togAddColor}) => {
    
    return (
    <header className='header'>
        <h1>{title}</h1>
          <Button color={togAddColor ? 'green' : 'red'} text={togAddColor ? 'Add' : 'Close'} onAdd={onAdd}/>
        {/* <Button color='blue' text='generate patients form' onAdd={onAdd}/> */}
    </header>
  )
}
Header.propTypes={
    title:PropTypes.string,}
export default Header