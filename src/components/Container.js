import React, { useEffect } from 'react'
import { useState } from 'react'
import {db} from "./firebase"

const producto=[{id:1,nombre:"claudio"},
{id:2,
nombre:"Luis"}]

const Container = () => {

const[contador, setcontador]=useState(0)
const[prod, setprod]=useState([])

useEffect(()=>{
const prome= new Promise((resp)=>{
resp(producto)
})
.then((cont)=>{
console.log("okis")
setTimeout(()=>{
    setprod(producto)
    console.log("productos cargados")
},5000)
})
.catch((error)=>{
    console.log("okis")
})



},[])

const click=()=>{
setcontador(contador+1)
console.log("chucoo")
}

  return (
    <div>
        <button onClick={click}>haga click</button>
    </div>
  )
}

export default Container