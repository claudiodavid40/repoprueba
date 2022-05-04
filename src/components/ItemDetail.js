import React from 'react'
import{Link , NavLink} from 'react-router-dom'

const ItemDetail = ({producto}) => {

    return (
      <>
      <article>
      <h3> {producto.titulo}</h3>
       <img src={producto.imagen}/>
       <p>{producto.precio} </p>
       <p>Categoria:{producto.categorias}</p>
       {/* <p>Categorias : {producto.categorias.map(categoria=>{
        return <span>{categoria}</span>
      })} </p> */}

      <Link to="/">Home</Link>
      </article>
      </>
    )
  }

export default ItemDetail