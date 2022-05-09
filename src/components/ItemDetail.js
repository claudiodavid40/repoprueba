import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import React from 'react'
import{Link , NavLink} from 'react-router-dom'
import ItemCount from './ItemCount'



const ItemDetail = ({producto}) => {

  const onClick=(propsi)=>{
    toast(` Se han cargado ${propsi} productos` , {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    
   }
 
    return (
      <>
      <article>
      <h3> {producto.titulo}</h3>
       <img src={producto.imagen}/>
       <p> esta es un pequeña descripcion estoy en el detalle </p>
       <p>{producto.precio} </p>
       <p>Categoriaaaa:{producto.categorias}</p>
       <p>contador {onClick}</p> 
      <ItemCount stock={5} inicial={0} onAdd={onClick} />
      {}
      <Link to="/">Home</Link>
      <ToastContainer />
      </article>
      </>
    )
  }

export default ItemDetail