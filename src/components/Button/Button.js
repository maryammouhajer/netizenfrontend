import React from 'react'
import Button from 'react-bootstrap/Button';


import './Button.css'
const button = (props) => {
  return (
    <div className='text-center'>
      <button  className='button text-align-center align-item-center post-button'>
        {props.text}
      </button>
    </div>

  )
}

export default button