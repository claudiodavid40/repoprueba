import Nav from "./Nav"
import{Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo"><h1 className="logo"><img src="/imagen/logoposterpolish.svg" width={300}/></h1></Link>
      <Nav/>
    </header>
  )
}

export default Header