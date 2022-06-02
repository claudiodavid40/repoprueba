import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import React from 'react'
import{Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { useContext} from 'react'
import { contexto } from './miContexto';


const ItemDetail = ({producto, id}) => {

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
      <div className='itemdetail'>
      <article className='detalle'>
      <h2>REMERAS POSTERPOLISH</h2>
      
       <img src={producto.imagen}/>
       <h3> {producto.titulo}</h3>
       <p><span className='precioSpan'>${producto.precio}</span> </p>
       <p>Categoria:{producto.categorias}</p>
      <div className='containerCount'>
      <ItemCount stock={5} inicial={1} onAdd={onClick} productos={producto} />
      <Link to="/">Home</Link>
      </div>
      <ToastContainer />
      </article>
      </div>
      </>
    )
  }

export default ItemDetail