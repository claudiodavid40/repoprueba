import React, { useEffect, useState} from 'react'
// import React from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom"

const productosiniciales=[{
    id:1,
    titulo:"Remera pique Hombre",
    imagen:"https://via.placeholder.com/300x300",
    categorias: "remeras",
    precio:56
},
{
    id:2,
    titulo:"Pantalon Jogger",
    imagen:"https://via.placeholder.com/300x300",
    categorias: "pantalon",
    precio:46
},
{
    id:3,
    titulo:"Pantalon azul",
    imagen:"https://via.placeholder.com/300x300",
    categorias: "pantalon",
    precio:17
},
{
    id:4,
    titulo:"Camisa manga corta",
    imagen:"https://via.placeholder.com/300x300",
    categorias: "camisas",
    precio:28
},
]

const ItemDetailContainer = () => {

    const[producto,setProducto]=useState({})
    const[cargando,setCargando]=useState(true)
    const {id} = useParams()

    useEffect(()=>{
        const resultado = productosiniciales.filter((producto)=>{
            return producto.id ==id
          })[0]
        //   setCargando(false)
        //  setProducto(resultado)
        
        const promesa=new Promise((res)=>{
             setTimeout(()=>{
                 res(resultado)
             },2000)
            })
        
            .then(()=>{
                     setCargando(false)
                     setProducto(resultado)
                    
                 
             })

    })

   if(cargando) {
    return (<p>cyrr...</p>)
   }else{
       return(
          <ItemDetail key={producto.id} producto={producto}/>
                 
       )
   }
  
}

export default ItemDetailContainer