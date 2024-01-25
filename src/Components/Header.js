import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({Title}) => {
    const onClick=()=>{
    console.log('click')
    }
  return (
    <header className='header'>
        <h1>{Title}</h1>
        <Button color='red' text='hello there' onclick={onclick}/>
        <Button color='blue' text='generate tasks form' onclick={onclick}/>
    </header>
  )
}
Header.propTypes={
    title:PropTypes.string,}
export default Header