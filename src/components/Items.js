import React from 'react'
import {Link, useNavigate} from "react-router-dom"

const Items = ({producto}) => {

//  const navigate=useNavigate()

//   const handleClick=()=>{
//     navigate(`/producto/"+ producto.id `)
//   }

  return (
    <>
    <article>
    <h3> {producto.titulo}</h3>
     <img src={producto.imagen}/>
     <p> esta es un pequeña descripcion  </p>
     <p>{producto.precio} </p>
     <p>Categoria:{producto.categorias}</p>
     
      <Link to={"/producto/"+ producto.id }> <button>Detalles</button></Link> 
     {/* <button onClick={handleClick}>ver mas</button> */}
    </article>
    </>
  )
}

export default Items