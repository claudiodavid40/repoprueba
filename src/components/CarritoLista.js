import React from 'react'
import CarritoItem from './CarritoItem'
import { memo } from 'react'

const CarritoLista = ({carrito}) => {
  return (
    <ul>{carrito.map(carri=>{
        return<CarritoItem key={carri.id} carrito={carri}/>

    })}</ul>
  )
}

export default memo(CarritoLista)