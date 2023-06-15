import React, { useState, useEffect } from 'react'
import "../styles/Loged.css"

export const Loged = (props) => {

  const handleLogout = () => {
    props.handleLogout();
  };

  return (
    <div className='container-loged'>
        <div className="bienvenido">
          <p>Bienvenido {props.nombre}!</p>
          {/* VISUALIZACION DEL AVATAR SELECCIONADO EN EL BOTON DE LOGIN DEL COMPONENTE Login */}
          <img
            src={`https://img.icons8.com/color/48/000000/${props.avatar}.png`}
            alt="Avatar"
          />
        </div>
        
          {/* BOTON SALIR */}
        <button onClick={handleLogout}>
          Salir
        </button>   
    </div> 
  )

}

export default Loged;