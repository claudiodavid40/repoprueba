import{Link} from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="footer">
      <p>Copyright &copy; - 2022</p>
      <p>Todos los derechos reservados</p>
      <Link to="/" className="logo"><h1 className="logo"><img src="/imagen/logoposterpolish.svg" width={300}/></h1></Link>
      
    </footer>
  )
}

export default Footer