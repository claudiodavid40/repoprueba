import { Link } from "react-router-dom"
import { useContext } from "react"
import {contexto} from "./miContexto"


const CarWidget = () => {

  

  const {cantidad_total,iconocarrito}=useContext(contexto)


  return (
    
    <Link to="/carrito">
    <span class="material-icons">
    shopping_cart
    </span>
    {iconocarrito()}
    </Link>
    
  )
}

export default CarWidget