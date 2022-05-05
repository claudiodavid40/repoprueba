import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import ItemCount from './ItemCount'
const Items = ({producto}) => {

//  const navigate=useNavigate()

//   const handleClick=()=>{
//     navigate(`/producto/"+ producto.id `)
//   }
const onAdd=()=>{
  
}
  return (
    <>
    <article>
    <h3> {producto.titulo}</h3>
     <img src={producto.imagen}/>
     <p> esta es un pequeña descripcion  </p>
     <p>{producto.precio} </p>
     <p>Categoria:{producto.categorias}</p>
     <ItemCount stock={5} inicial={0} onAdd={onAdd} />
      <Link to={"/producto/"+ producto.id }> <button>Detalles</button></Link> 
     {/* <button onClick={handleClick}>ver mas</button> */}
    </article>
    </>
  )
}

export default Items