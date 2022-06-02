import React from 'react'
import {Link} from "react-router-dom"

const Items = ({producto}) => {

  return (
    <>
    <div className='items'>
    <article>
    <h3> {producto.titulo}</h3>
     <img src={producto.imagen} width={300}/>
     <p> 100% Algodon peinado 20/20 </p>
     <p><span className='precioSpan'>${producto.precio}</span> </p>
     <p>Categoria:{producto.categorias}</p>
     
      <Link to={"/producto/"+ producto.id }> <button>Detalles</button></Link> 
     {/* <button onClick={handleClick}>ver mas</button> */}
    </article>
    </div>
    </>
  )
}

export default Items