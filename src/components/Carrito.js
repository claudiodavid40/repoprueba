import React, { useContext, useState } from 'react';
import CarritoLista from './CarritoLista';
import {contexto} from "./miContexto";
import{db} from "./firebase";
import {collection , addDoc}from "firebase/firestore"
import { toast } from 'react-toastify';


const Carrito = () => {

  const {precio_total,carrito,vaciarCarrito,cantidad_total,preciototal,iconocarrito}=useContext(contexto)
  const [idCompra, setIdCompra] = useState("")
 

const guardarCompra=()=>{


  const ordenesCollection = collection(db,"ordenes")

  const orden = {
    buyer : {
    name : "David",
    phone : "0303456",
    email : "david@martinez"
    },
    
    items : carrito,
    date : "",
    total : 10000
  }


  const consulta=addDoc(ordenesCollection,orden)

  consulta
  .then((resultado)=>{   
    setIdCompra(resultado.id)
  })
  .catch((err)=>{
    toast.error(err)
  })

}



  return (
    <div className='itemCarrito'>
    <h1>Carrito</h1>
    <CarritoLista carrito={carrito}/>
    {/* <button onClick={handleClick}>vaciar</button> */}
    <h2>Total de productos en el carro:{iconocarrito()}</h2>
    <h2>Precio Total:$ {preciototal()}</h2>
    <button onClick={guardarCompra}> finalizar compra</button>
    <br></br>
    {idCompra && <h3>Felicitaciones! ha realizado con exito su compra.<br></br><span className='codigospan'>Código:{idCompra}</span></h3>}

    </div>
  )
}

export default Carrito