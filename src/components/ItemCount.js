import React from 'react'
import { useState } from 'react'

// import ItemsList from './Components/ItemsList'

const ItemCount = (props) => {

const[contador,setContador]=useState(props.inicial)
const[ok,setOk]=useState(false)
  // const resultado=useState(0)
  // const contador=resultado[0]
  // const setContador=resultado[1]

  const clickbotonsuma=()=>{
    
    if(contador<10){
        setContador(contador+1)
    }
  }
  const clickbotonresta=()=>{
    if(contador>0){
    setContador(contador-1)
  }
  }
  

  const okcompra=()=>{
    // props.onAdd(contador)
    setOk(true)
    
}

if(!ok){
      return (
        <> 
        <div className='producto'>
        
   
                <div className='contador'>
                <button onClick={clickbotonsuma}>+</button>
                <p>{contador}</p>
                <button onClick={clickbotonresta}>-</button>
                </div>
                <button onClick={okcompra} >agregar al carrito</button>
            
        </div>
        </>
      )
}
          else{
            return (
              <> 
              <div className='producto'>
                     
                      <div className='contador'>
                      <button onClick={clickbotonsuma}>+</button>
                      <p>{contador}</p>
                      <button onClick={clickbotonresta}>-</button>
                      </div>
                      <button onClick={okcompra} >agregar al carrito</button>
                      <p className='modal'>compra confirmada</p>
                  
              </div>
              </>
            )
            
          }
}
export default ItemCount