
import{Link } from 'react-router-dom'
import CarWidget from './CarWidget'
const Nav = () => {
  return (
    
    <nav className="nav">
      
      <Link to="/productos/Teatro" className="linki">Teatro /</Link>
      <Link to="/productos/Literatura" className="linki">Literatura /</Link>
      <Link to="/productos/Musica" className="linki">Musica /</Link>
      <Link to="/productos/Peliculas" className="linki">Peliculas /</Link>
      <a href="#" className="linki"><CarWidget/></a>
    </nav>
  )
}

export default Nav

