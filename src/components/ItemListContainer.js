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
//const consulta=getDocs(productosCollection)
const filtro=query(productosCollection,where("categorias","==",nombrecategoria))
const consulta=getDocs(filtro)

 consulta
 .then((resultado)=>{

const productos=resultado.docs.map(doc=>{

    const productoConId=doc.data()
        productoConId.id=doc.id

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

       

},[nombrecategoria])


return (
<>
{ carg ? (<p> Cargando...</p>):<ItemList productos={produ}/>}
</>

)

// if (carg){
//     return(<p> Cargando...</p>)
// }
// else {
//     return (
//         <div >
//          <ItemList productos={produ}/>
//          </div>
         
//        )
// }

 
}

export default ItemListContainer