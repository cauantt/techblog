import React from 'react'
import './Input.css'

function Input({type, placeholder}) {
  return (
    <div>
        <input type={type} placeholder={placeholder}></input>
      
    </div>
  )
}

export default Input
