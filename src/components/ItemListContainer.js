import React, { useEffect, useState} from 'react'
import ItemList from './ItemList'
import{useParams} from "react-router-dom"

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

const ItemListContainer = () => {



const[produ,setProduc]=useState([])
const[]=useState([])
const[carg,setCargando]=useState(true)
const {nombrecategoria}=useParams()

useEffect(()=>{

    if(nombrecategoria==undefined){
        console.log("pido todos los productos")
    }else{
        console.log("pido los productos de",nombrecategoria)
    }



    const promesa=new Promise((res)=>{
        setTimeout(()=>{
            res(productosiniciales) 
        },2000)

    })
    .then(()=>{
       
      setCargando(false) 
      setProduc(productosiniciales) 
    })

},[nombrecategoria])



if (carg){
    return(<p> Cargando...</p>)
}
else {
    return (
        
         <ItemList productos={productosiniciales}/>
         
       )
}

 
}

export default ItemListContainer