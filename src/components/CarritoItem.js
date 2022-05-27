import React from 'react'
import  { useCallback,useContext } from 'react'
import {contexto} from "./miContexto"
import { memo } from 'react'


const CarritoItem = ({carrito, contador, id}) => {

    
const {eliminarProducto}=useContext(contexto)



  return (
    <div className='carrito'>
     
    <li>
    <ul><img src= {carrito.imagen} width={50}/></ul>
    <ul>Titulo: {carrito.titulo}</ul>
    <ul>Precio: {carrito.precio}</ul> 
    <ul>categoria: {carrito.categorias} </ul>
    <ul>cantidad: {contador}</ul>
    <button onClick={()=>eliminarProducto(id)} >x</button></li>
    </div>
    
  )
}

export default memo(CarritoItem)