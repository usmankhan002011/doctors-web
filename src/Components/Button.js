import React from 'react'
import PropTypes from 'prop-types'
/*import { ReactPropTypes } from 'react'*/


const Button = ({color, text, onAdd}) => {
  return (
    <button
        onClick={onAdd}
        style={{backgroundColor:color}}
        // className='btn'
        
        >
        
        {text}
    </button>
  )
}
/*Button.defaultProps={color:'steelblue'}*/
Button.propTypes={
    text:PropTypes.string,
    color:PropTypes.string,
    onAdd:PropTypes.func,
}

export default Button