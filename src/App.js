import{BrowserRouter} from 'react-router-dom'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
import MiCustomProvider from "./components/miContexto"

const App = () => {
  return (
    
    <BrowserRouter>
    <MiCustomProvider>
      <Header/>
      <Main/>
      <Footer/>
      </MiCustomProvider> 
    </BrowserRouter>
    
  )
}

export default App


