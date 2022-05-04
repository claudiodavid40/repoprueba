
import{Link , NavLink} from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/productos/Camisas" className="nav__link">Camisas /</Link>
      <Link to="/productos/Remeras" className="nav__link">Remeras /</Link>
      <Link to="/productos/Pantalon" className="nav__link">Pantalon /</Link>
    </nav>
  )
}

export default Nav

