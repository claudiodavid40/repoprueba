import React, { useEffect, useState} from 'react'
// import React from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom"

const productosiniciales=[{
    id:1,
    titulo:"Transpoiting",
    imagen:"https://via.placeholder.com/300x300",
    categorias: "Peliculas",
    precio:56
},
{
    id:2,
    titulo:"El Director",
    imagen:"https://via.placeholder.com/300x300",
    categorias: "Teatro",
    precio:46
},
{
    id:3,
    titulo:"Umbilical Brothers",
    imagen:"https://via.placeholder.com/300x300",
    categorias: "Cine",
    precio:17
},
{
    id:4,
    titulo:"Blur",
    imagen:"https://via.placeholder.com/300x300",
    categorias: "Musica",
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