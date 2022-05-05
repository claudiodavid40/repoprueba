import Nav from "./Nav"
import{Link , NavLink} from 'react-router-dom'
const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo"><h1 className="logo">POSTERPOLISH - REMERAS</h1></Link>
      <Nav/>
    </header>
  )
}

export default Header