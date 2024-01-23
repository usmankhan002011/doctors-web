import React from 'react'
import PropTypes from 'prop-types'
/*import { ReactPropTypes } from 'react'*/


const Button = ({color, text}) => {
  return (
    <button
        style={{backgroundColor:color}}
        className='btn'>
        {text}
    </button>
  )
}
/*Button.defaultProps={color:'steelblue'}*/
Button.propTypesropTypes={
    text:PropTypes.string,
    color:PropTypes.string
}

export default Button