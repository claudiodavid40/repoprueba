import React, { useContext } from 'react'
import {contexto} from "./miContexto"

const Carrito = () => {

  const {precio_total,carrito}=useContext(contexto)
  console.log(precio_total,carrito)

  return (
    <div>
    <h1>Carrito</h1>
    <h2>Precio total:${precio_total}</h2>
    </div>
  )
}

export default Carrito