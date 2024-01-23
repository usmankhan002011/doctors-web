import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({Title}) => {
  return (
    <header className='header'>
        <h1>{Title}</h1>
        <Button color='red' text='hello there'/>
    </header>
  )
}
Header.propTypes={
    title:PropTypes.string,}
export default Header