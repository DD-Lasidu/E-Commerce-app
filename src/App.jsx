
import './App.css'
import Header from './components/Organisam/Header'
import Footer from './components/Organisam/Footer'
import Home from './Pages/Home'
import { Button } from 'react-bootstrap'
import HeroSection from './components/Organisam/HeroSection'

function App() {
  

  return (
    <>
      <div className='app-container'>
      <Header/>
      <HeroSection/>
      <Home/>
      <Button/>
      <Footer/>
     </div>
    </>
  )
}

export default App
