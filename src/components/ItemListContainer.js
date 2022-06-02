import React, { useEffect, useState} from 'react';
import ItemList from './ItemList';

import{useParams} from "react-router-dom";
import{db} from "./firebase";

import { collection , getDoc , doc , getDocs , addDoc , query , where, orderBy } from "firebase/firestore"

const ItemListContainer = () => {
const[produ,setProduc]=useState([])
const[carg,setCargando]=useState(true)
const {nombrecategoria}=useParams()

 useEffect(()=>{
     const productosCollection = collection(db,"Productos")
     const consultaDos=getDocs(productosCollection)
            consultaDos
            .then((resultado)=>{
                
                    
                        const productos = resultado.docs.map(doc=>{
                        const productoConId = doc.data()                    
                        productoConId.id = doc.id
                        return productoConId
                    
                        }) 

        

                        setProduc(productos)
                        setCargando(false)

                    })
            .catch((error)=>{
                console.log(error)
            })
            .finally(()=>{

            })
if(nombrecategoria){
        const filtro=query(productosCollection,where("categorias","==",nombrecategoria))   
        const consulta=getDocs(filtro)
          consulta
          .then((resultado)=>{

                  const products=resultado.docs.map(doc=>{

                       const productoConIddos=doc.data()
                           productoConIddos.id=doc.id

                           return productoConIddos

                          })

                               setProduc(products)
                               setCargando(false)
                   })
           .catch((error)=>{
                   console.log(error)
                   })
            .finally(()=>{

           })
        }
},[nombrecategoria])


return (
<>
{ carg ? (<p> Cargando...</p>):<ItemList productos={produ}/>}
</>

)

 
}

export default ItemListContainer