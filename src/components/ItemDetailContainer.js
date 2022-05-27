import React, { useEffect, useState} from 'react';
// import React from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";
import{db} from "./firebase";

import { collection, getDoc , doc } from "firebase/firestore"


const ItemDetailContainer = () => {

    
    const[produ,setProduc]=useState([])

    const[carg,setCargando]=useState(true)
   
    const {id}=useParams()

    useEffect(()=>{
    
    const productosCollection = collection(db,"Productos")
    const resultadoDelDoc=doc(productosCollection,id)
   const consulta=getDoc(resultadoDelDoc)

    
     consulta
     .then((resultado)=>{
         setProduc(resultado.data())
         setCargando(false)
    })
    .catch ((error)=>{
    console.log(error)
    setCargando(false)
    })
 
    })
    
    
   if(carg) {
    return (<p>cargando...</p>)
   }else{
       return(
          <ItemDetail key={produ.id} producto={produ} id={id}/>
                 
       )
   }
  
}

export default ItemDetailContainer