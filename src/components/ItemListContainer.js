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



if (carg){
    return(<p> Cargando...</p>)
}
else {
    return (
        <div >
         <ItemList productos={produ}/>
         </div>
         
       )
}

 
}

export default ItemListContainer