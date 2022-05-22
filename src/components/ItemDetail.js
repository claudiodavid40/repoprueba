import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import React from 'react'
import{Link , NavLink} from 'react-router-dom'
import ItemCount from './ItemCount'
import {useState, useContext} from 'react'
import { contexto } from './miContexto';




const ItemDetail = ({producto, id}) => {

  // const[cartItems,setCartItems]=useState(0)
  const {agregarProducto}=useContext(contexto)

  const onClick=(contador)=>{
    toast(` Se han cargado ${contador} productos` , {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      },
      
      agregarProducto(contador,producto,id)
      
      );
    
   }
 
    return (
      <>
      <article>
      <h3> {producto.titulo}</h3>
       <img src={producto.imagen}/>
       <p> esta es un pequeña descripcion estoy en el detalle </p>
       <p>{producto.precio} </p>
       <p>Categoriaaaa:{producto.categorias}</p>
      {/* <p>{cartItems}</p> */}
      <ItemCount stock={5} inicial={0} onAdd={onClick} productos={producto} />
      
      <Link to="/">Home</Link>
      <ToastContainer />
      </article>
      </>
    )
  }

export default ItemDetail