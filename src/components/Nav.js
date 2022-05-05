
import{Link , NavLink} from 'react-router-dom'
import CarWidget from './CarWidget'
const Nav = () => {
  return (
    
    <nav className="nav">
      <a href="#" className="linki"><CarWidget/></a>
      <Link to="/productos/Teatro" className="linki">Teatro /</Link>
      <Link to="/productos/Cine" className="linki">Cine /</Link>
      <Link to="/productos/Musica" className="linki">Musica /</Link>
      <Link to="/productos/Peliculas" className="linki">Peliculas /</Link>
     
    </nav>
  )
}

export default Nav

