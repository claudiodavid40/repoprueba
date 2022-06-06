import React, { useContext, useState } from 'react';
import CarritoLista from './CarritoLista';
import {contexto} from "./miContexto";
import{db} from "./firebase";
import {collection , addDoc}from "firebase/firestore"



const Carrito = () => {

  const {precio_total,carrito,vaciarCarrito,cantidad_total,preciototal,iconocarrito}=useContext(contexto)
  const [idCompra, setIdCompra] = useState("")
 
const vaciarcarro=()=>{vaciarCarrito()}

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
    console.log(err)
  })

}



  return (
    <div className='itemCarrito'>
    <h1>Carrito</h1>
    <CarritoLista carrito={carrito}/>
    
    <h2>Total de productos en el carro:{iconocarrito()}</h2>
    <h2>Precio Total:$ {preciototal()}</h2>
    <div className='botonescarro'>
    <button onClick={guardarCompra}> Finalizar compra</button>
    <button onClick={vaciarcarro}> Vaciar</button>
    </div>
    <br></br>
    {idCompra && <h3>Felicitaciones! ha realizado con exito su compra.<br></br><span className='codigospan'>Código:{idCompra}</span></h3>}

    </div>
  )
}

export default Carrito