import React, { useContext, useState } from 'react'
import CarritoLista from './CarritoLista'
import {contexto} from "./miContexto"

const Carrito = () => {

  const {precio_total,carrito,vaciarCarrito}=useContext(contexto)
 
 
  console.log(precio_total,carrito,vaciarCarrito)
  
const handleClick=()=>{
  vaciarCarrito()
}



  return (
    <div>
    <h1>Carrito</h1>
    <CarritoLista carrito={carrito}/>
    <button onClick={handleClick}>vaciar</button>
    </div>
  )
}

export default Carrito