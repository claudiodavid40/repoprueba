import { Link } from "react-router-dom"
import { useContext } from "react"
import {contexto} from "./miContexto"


const CarWidget = () => {

  

  const {iconocarrito}=useContext(contexto)


  return (
    
    <Link to="/carrito" className="carritocolor">
     <div >
    <span class="material-icons">
    shopping_cart
    </span>
    {iconocarrito()}
    </div> 
    </Link>
    
  )
}

export default CarWidget