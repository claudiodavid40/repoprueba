import React from 'react'
import{Link , NavLink} from 'react-router-dom'
import ItemCount from './ItemCount'

const ItemDetail = ({producto}) => {

  const onAdd=()=>{
  
  }
    return (
      <>
      <article>
      <h3> {producto.titulo}</h3>
       <img src={producto.imagen}/>
       <p> esta es un pequeña descripcion estoy en el detalle </p>
       <p>{producto.precio} </p>
       <p>Categoria:{producto.categorias}</p>
       {/* <p>Categorias : {producto.categorias.map(categoria=>{
        return <span>{categoria}</span>
      })} </p> */}
      <ItemCount stock={5} inicial={0} onAdd={onAdd} />
      <Link to="/">Home</Link>
      </article>
      </>
    )
  }

export default ItemDetail