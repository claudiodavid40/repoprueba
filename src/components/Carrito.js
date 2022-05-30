import React, { useContext, useState } from 'react';
import CarritoLista from './CarritoLista';
import {contexto} from "./miContexto";
import{db} from "./firebase";
import {collection , addDoc}from "firebase/firestore"


const Carrito = () => {

  const {precio_total,carrito,vaciarCarrito,cantidad_total}=useContext(contexto)
  const [idCompra, setIdCompra] = useState("")
 
 
 
  
const handleClick=()=>{
  vaciarCarrito()
}

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
    console.log(orden)
    setIdCompra(resultado.id)
  })
  .catch((err)=>{
    console.log(err)
  })

}



  return (
    <div className='itemCarrito'>
    <h1>Carrito</h1>
    <CarritoLista carrito={carrito}/>
    {/* <button onClick={handleClick}>vaciar</button> */}
    <h2>Total de productos en el carro:{cantidad_total}</h2>
    <h2>Precio Total:{precio_total}</h2>
    <button onClick={guardarCompra}> finalizar compra</button>
    {idCompra && <h3>Compra guardada con id: {idCompra}</h3>}

    </div>
  )
}

export default Carrito