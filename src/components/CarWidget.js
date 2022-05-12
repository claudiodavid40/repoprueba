import { Link } from "react-router-dom"
import { useContext } from "react"
import {contexto} from "./miContexto"


const CarWidget = () => {

  // const{cantidad_total,precio_total,carrito}=useContext()
  const {cantidad_total}=useContext(contexto)
console.log (`holasss${cantidad_total}`)

  return (
    
    <Link to="/carrito">
    <span class="material-icons">
    shopping_cart
    </span>
    {cantidad_total}
    </Link>
    
  )
}

export default CarWidget