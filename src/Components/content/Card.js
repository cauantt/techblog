import React from 'react'
import './Card.css'

function Card( {img,text, title}) {
  return (
    <div className='card'> 
      <div className='bg'>
        <img id="img" src={img}/>
      </div>
      <div className='texts'>
        <h3 id="title">{title}</h3>
        <p id="disc"> {text}</p>
      </div>
      
    </div>
  )
}

export default Card
