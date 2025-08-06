
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Planos from './pages/planos/Planos'
import Sobre from './pages/sobre/Sobre'
import Contato from './pages/contato/Contato'

function App() {
  

  return (
    <div className='bg-black'>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/planos' element={<Planos />} />
            <Route path='/contato' element={<Contato/>} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
