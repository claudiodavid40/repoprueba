import React from 'react'
import CarritoItem from './CarritoItem'
import { memo } from 'react'

const CarritoLista = ({carrito}) => {
  return (
    <ul>{carrito.map(carri=>{
        return<CarritoItem key={carri.id} carrito={carri.producto} contador={carri.contador} id={carri.id}/>

    })}</ul>
  )
}

export default memo(CarritoLista)