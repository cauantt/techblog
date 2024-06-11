import React from 'react'
import './Contact.css'
import Input from '../contact/Input'

function Contact() {
  return (
    <div className='contact'>

    <div className='contactlayout'> 
        <p>Entre em contato</p>
        <Input type="text" placeholder="Nome"/>
    <Input type="email" placeholder="Email"/>
    <input id='input1' type="text" placeholder='Assunto da mensagem'></input>
    <button >ENTRAR EM CONTATO</button>
    
    
    </div>
  
       
    </div>
  )
}

export default Contact
