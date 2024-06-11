import React from 'react'
import './Header.css'
import Logo from "../../Assets/img/39f59f3dff209aa79ab0c6a10baa41b1.png"

function Header() {
  return (
    <div className='layout'>
      <div className='header'>
          <div className='left'>
              <h1>Encontre os <span>melhores artigos</span><br/>
              de programação em um só lugar</h1>
              <p>Explore o topo da programação em um só lugar! <br/>
              Seu destino único para dicas e tendências atuais.</p>
              <button id="button">BUSCAR ARTIGOS</button>
          </div>
          <div className='right'>
              <img id="logo" src={Logo} alt='logo'/>
              </div>
      
      </div>
    </div>
  )
}

export default Header
