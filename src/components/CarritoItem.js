import React from 'react'
import  { useCallback,useContext } from 'react'
import {contexto} from "./miContexto"
import { memo } from 'react'


const CarritoItem = ({carrito}) => {

    
const {eliminarProducto}=useContext(contexto)

const handleClick=()=>{
   eliminarProducto(carrito.id)
    
}




  return (
    <div>
    <li>{carrito.titulo} {carrito.precio} {carrito.categorias} <button onclick={handleClick} >x</button></li>
    </div>
  )
}

export default memo(CarritoItem)