import React, { useEffect, useState} from 'react';
// import React from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";
import{db} from "./firebase";

import { collection , getDoc , doc , getDocs , addDoc , query , where, orderBy } from "firebase/firestore"


// const productosiniciales=[{
//     id:1,
//     titulo:"Transpoiting",
//     imagen:"https://via.placeholder.com/300x300",
//     categorias: "Peliculas",
//     precio:56,
//     cantidadporproducto:0
// },
// {
//     id:2,
//     titulo:"El Director",
//     imagen:"https://via.placeholder.com/300x300",
//     categorias: "Teatro",
//     precio:46,
//     cantidadporproducto:0
// },
// {
//     id:3,
//     titulo:"Umbilical Brothers",
//     imagen:"https://via.placeholder.com/300x300",
//     categorias: "Cine",
//     precio:17,
//     cantidadporproducto:0
// },
// {
//     id:4,
//     titulo:"Blur",
//     imagen:"https://via.placeholder.com/300x300",
//     categorias: "Musica",
//     precio:28,
//     cantidadporproducto:0
// },
// ]

const ItemDetailContainer = () => {

    
    const {id} = useParams()

    const[produ,setProduc]=useState([])
    const[]=useState([])
    const[carg,setCargando]=useState(true)
    const {nombrecategoria}=useParams()
    
    useEffect(()=>{
    
    const productosCollection = collection(db,"Productos")
    const consulta=getDocs(productosCollection)
    console.log(productosCollection)
     consulta
     .then((resultado)=>{
    // console.log(resultado.docs)
    const productos=resultado.docs.map(doc=>{
        const productoConId={
            ...doc.data(),
            id:doc.id}
    
            return productoConId
    
    })
    
    setProduc(productos)
    setCargando(false)
    })
    .catch((error)=>{
    
    })
     .finally(()=>{
    
    })
    
            // console.log("pido todos los productos")
    
            // const promesa=new Promise((res)=>{
            //     setTimeout(()=>{
            //         res(productosiniciales) 
            //     },2000)
        
            // })
            // .then(()=>{
            //    if(nombrecategoria==undefined){
            //   setCargando(false) 
            //   setProduc(productosiniciales) 
            // }else{
            //     console.log("pido los productos de",nombrecategoria)
               
            //     setProduc(productosiniciales.filter(itera=> nombrecategoria==itera.categorias))
            //     setCargando(false)
            // }
            // })
    
    
    },[nombrecategoria])

   if(carg) {
    return (<p>cyrr...</p>)
   }else{
       return(
          <ItemDetail key={produ.id} producto={produ} id={id}/>
                 
       )
   }
  
}

export default ItemDetailContainer